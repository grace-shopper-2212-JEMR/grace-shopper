import axios from 'axios';
import { loginWithToken } from './auth';

export const register = (credentials)=> {
    return async(dispatch)=> {
      const response = await axios.post('/api/auth/register', credentials);
      const token = response.data.token;
      window.localStorage.setItem('token', token);
      dispatch(loginWithToken());
  
    }
  }

  export default register;