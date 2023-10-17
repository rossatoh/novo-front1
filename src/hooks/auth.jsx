import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  const MySwal = withReactContent(Swal)

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@braindump:user', JSON.stringify(user));
      localStorage.setItem('@braindump:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });

    } catch (error) {
      if (error.response) {
        MySwal.fire({
          didOpen: () => {
            return MySwal.fire(<p>{ error.response.data.message }</p>)
          },
        })
      } else {
        return MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Não foi possível entrar.',
        })
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@braindump:token');
    localStorage.removeItem('@braindump:user');

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append('avatar', avatarFile);

        const response = await api.patch('/users/avatar', fileUploadForm);
        user.avatar = response.data.avatar;
      }

      await api.put('/users', user);
      localStorage.setItem('@braindump:user', JSON.stringify(user));

      setData({ user, token: data.token });
      MySwal.fire(<p>Perfil atualizado!</p>)
    } catch (error) {
      if (error.response) {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.response.data.message
        })
      } else {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Não foi possível atualizar o perfil.'
        })
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@braindump:token');
    const user = localStorage.getItem('@braindump:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user:data.user, signOut, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
