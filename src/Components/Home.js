import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import backgroundImg from 'src/images/coffee_cup_illustration_blue.jpeg'
const Home = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
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

        console.log(auth.id)
        (
            <div>
                <h1>Welcome {auth.username}</h1>
                <div>
                  <div>
                    Please browse amongst our delicious selection of drinks or our fashionable merch.
                  </div>
                  <Button variant="contained" onClick={()=> dispatch(logout())}>Logout</Button>
                </div>
            </div>
        

        )  : (
          <div>
            <img src={backgroundImg}/>
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
  );
};

export default Home;
