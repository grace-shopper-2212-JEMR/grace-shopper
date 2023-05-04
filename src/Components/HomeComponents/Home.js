import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import SubNavHome from './SubNavHome';

const Home = ()=> {
  const { auth, reviews } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    // <div className='background' style={{ backgroundImage: "url(static/images/coffee_cup_illustration_blue.jpeg)" }}>
    <div>
      <SubNavHome/>
      
       {
        (!auth.id) ? 
     (
      <div>
        <div> 
          <h1>You're Not Logged In!</h1>
        {/* <div className='background' style={{ backgroundImage: "url(static/images/coffee shop pink.jpeg)" }}> */}
        <div>
          Feel free browse through our delicious selection of drinks or our fashionable merch, but get full functionality by logging in!
        </div>
        <Button variant='outlined' ><Link to={`/register`}>Register Here</Link></Button> or <Button variant='outlined'> <Link to='/login'> Login </Link></Button>
      </div>
      </div>
    // </div>        

        )  : (

          <div>
           
          <h1>Welcome {auth.username}</h1>
          <div>
            <div>
              Please browse amongst our delicious selection of drinks or our fashionable merch.
            </div>
            <Link to='/reviews'>Create And See Your Reviews</Link>
            <br/>
            <Link to='/reviews'>Read Our Reviews({reviews.length})</Link>
          </div>
        </div>
    
        )
        } 
          </div>
    // </div>
  );
};

export default Home;
