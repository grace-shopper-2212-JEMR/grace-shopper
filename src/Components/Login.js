import React, { useState } from 'react';
import { attemptLogin } from '../store';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = ()=> {
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
      <form onSubmit={ login }>
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
        <button> Login
        {/* <Button variant='contained'>Login</Button> */}
        {/* need to figure out how to make the Button act like the typical button html tag */}
        </button>
      </form>
      <div>
          Not an existing customer? {' '}
          <Link to={'/register'}>Create A New User</Link>
        </div>
    </div>
  );
};

export default Login;
