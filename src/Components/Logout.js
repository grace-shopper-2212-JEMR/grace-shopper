import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'



const Logout = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div>
        {
        auth.id ? (
            <div>
                <h1>Logout</h1>
                <div>
                    Are you sure you want to log out?
                    <Button variant="contained" onClick={()=> dispatch(logout())}>Logout</Button>
                </div>
            </div>
        
        )  : (
            <div>
                <h1>You're Not Logged In!</h1>
                <div>
                    <Link to={`/register`}>Register Here</Link> or <Link to='/login'> Login </Link>
                </div>
            </div>
        )
        } 
    
    </div>
  );
};

export default Logout;