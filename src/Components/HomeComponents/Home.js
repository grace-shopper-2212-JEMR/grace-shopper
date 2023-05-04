import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import SubNavHome from './SubNavHome';


const Home = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <>
      <SubNavHome/>

      
       { (!auth.id) ? 
     (
      <div id="homepage">   

        <div> 
          <h2>Welcome! Please log in to place an order, but feel free to browse!</h2>
        <Button variant='outlined'><Link to={`/register`} style={{fontSize: '1.2rem', fontWeight:'500'}}>Register Here</Link></Button> or <Button variant='outlined'> <Link to='/login' style={{fontSize: '1.2rem', fontWeight:'500'}}> Login </Link></Button>
        </div>

        <div id="homepageImage"/>

      </div>

        )  : (

          <div id="homepage">           
          <h1>Welcome, {auth.username}!</h1>
          <div>
            <div>
              {auth.adminStatus === true? <Link to='/admin'>Admin Tools</Link> : ' Please browse amongst our delicious selection of drinks or our fashionable merch.'}
            </div>
            <Link to='/reviews'>Give us a Review!</Link>
          </div>
        </div>
    
        )
        } 

  
    </>
  );
};

export default Home;
