import React, { useState } from 'react';
import { attemptLogin } from '../store';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const LoginAdmin = ()=> {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const onChange = ev => {
    setCredentials({...credentials, [ ev.target.name ]: ev.target.value });
  };

  const login = (ev)=> {
    ev.preventDefault();
    dispatch(attemptLogin(credentials));
    navigate('/home')
  };
  return (
    <div>
      <h2>Login</h2>
      <form >
        <TextField
          label='username'
          value = { credentials.username }
          name = 'username'
          onChange = { onChange }
          />
        <div style={{ marginBottom: 1 }}/>
        <TextField
          label='password'
          name = 'password'
          value={ credentials.password }
          onChange = { onChange }
        />
        <Button 
        onClick={ login }> 
          Login
        </Button>
      </form>
      <div>
          Not an existing customer? {' '}
          <Link to={'/register'}>Create A New User</Link>
        </div>
    </div>
  );
};

export default LoginAdmin;
