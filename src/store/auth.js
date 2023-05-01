import axios from 'axios';
const auth = (state = { }, action)=> {
  if(action.type === 'SET_AUTH'){
    return action.auth;
  }
  return state;
};

export const updateAuth = (auth)=> {
  return async(dispatch)=> {
    const token = window.localStorage.getItem('token');
    const response = await axios.put(`/api/auth/${ token }`, auth);
    dispatch({ type: 'SET_AUTH', auth: response.data });
  };
};

export const logout = ()=> {
  window.localStorage.removeItem('auth');
  return { type: 'SET_AUTH', auth: {} };
};


export const loginWithToken = ()=> {
  return async(dispatch)=> {
    const token =  window.localStorage.getItem('token');
    if(token){
      const response = await axios.get('/api/auth', {
        headers: {
          authorization: token
        }
      });
      dispatch({ type: 'SET_AUTH', auth: response.data });
    }
  };
};

export const attemptLogin = (credentials)=> {
  return async(dispatch)=> {
    const response = await axios.post('/api/auth', credentials);
    window.localStorage.setItem('token', response.data);
    dispatch(loginWithToken());
  };
};

export default auth;
