import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://braimdump-api.onrender.com'
});
