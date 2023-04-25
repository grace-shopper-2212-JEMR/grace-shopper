import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import Button from '@mui/material/Button';

const Home = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home</h1>
      <div>
        Welcome { auth.username }!!
        <Button variant="contained" onClick={()=> dispatch(logout())}>Logout</Button>
      </div>
    </div>
  );
};

export default Home;
