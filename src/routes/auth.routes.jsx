import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import { WelcomePage } from '../pages/WelcomePage';
import { Recover } from '../pages/Recover';
import { ChangePassword } from '../pages/ChangePassword';


export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/recovery' element={<Recover />} />
      <Route path='/changepassword/:token' element={<ChangePassword />} />
    </Routes>
  )
}
