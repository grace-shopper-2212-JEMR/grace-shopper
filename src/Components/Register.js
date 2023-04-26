
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  register } from '../store';
import { useNavigate } from 'react-router-dom';

const Register = ()=> {
  const [username, setUsername ] = useState('');
  const [password, setPassword ] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _register = async(ev)=> {
    ev.preventDefault();
    const credentials = {
      username,
      password
    };

    try {
      await dispatch(register(credentials));
      navigate('/products');
    }
    catch(ex){

    }
  };
  return (
    <form onSubmit={ _register }>
      <input placeholder='username' value={ username } onChange={ ev => setUsername(ev.target.value)}/>
      <input placeholder='password' value={ password } onChange={ ev => setPassword(ev.target.value) }/>
      <button>Register</button>
    </form>
  );
};

export default Register;