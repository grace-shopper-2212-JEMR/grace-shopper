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
    <div id="login" style={{paddingTop: '1rem', backgroundColor:"#f5f5f5"}}>
      <h1>Login</h1>
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
        <Button type="submit"
        onClick={ login } style={{fontSize: "1.2rem"}}> 
          Login
        </Button>
        <Button type="submit" style={{fontSize: "1.2rem"}}> 
        <a href={`https://github.com/login/oauth/authorize?client_id=${window.client_id}`} style={{ textDecoration: 'none'  }}>Login with Github</a>
        </Button>
      </form>
      <div>
          Not an existing customer? {' '}
          <Link to={'/register'}>Create A New User</Link>
        </div>
    </div>
  );
};

export default Login;
