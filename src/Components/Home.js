import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

const Home = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <div className='background' style={{ backgroundImage: "url(static/images/coffee_cup_illustration_blue.jpeg)" }}>
    <div>
      
       {
        (!auth.id) ? 
     (
      <div>

      <h1>You're Not Logged In!</h1>
      <div>
        <div>
        Feel free browse through our delicious selection of drinks or our fashionable merch, but get full functionality by logging in!
        </div>
        {/* <Button variant='outlined' ><Link to={`/register`}>Register Here</Link></Button> or <Button variant='outlined'> <Link to='/login'> Login </Link></Button> */}
      </div>
  </div>        

        )  : (

          <div>
           
          <h1>Welcome {auth.username}</h1>
          <div>
            <div>
              Please browse amongst our delicious selection of drinks or our fashionable merch.
            </div>
          </div>
        </div>
    
        )
        } 
          </div>
    </div>
  );
};

export default Home;
