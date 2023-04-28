import React, { useEffect, useRef } from 'react';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import Register from './Register';
import Nav from './Nav';

import DrinkProducts from './DrinkProducts';
import DrinkProductPage from './DrinkProductPage';
import Merchs from './Merchs';
import Merch from './Merch';
import Account from './Account';
import About from './About';
import Logout from './Logout';

import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart, fetchDrinks } from '../store';
import { Link, Routes, Route } from 'react-router-dom';

const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  const prevAuth = useRef({});

  useEffect(()=>{
    dispatch(fetchDrinks());
  }, [])
  useEffect(()=> {
    dispatch(loginWithToken());
  }, []);

  useEffect(()=> {
    if(!prevAuth.current.id && auth.id){
      dispatch(fetchCart());
    }
    if(prevAuth.current.id && !auth.id){
      console.log('logged out')
    }
  }, [auth]);

  useEffect(()=> {
    prevAuth.current = auth
  })
  return (
    <div>
      <Nav />
      
      
         <div>
          <a href={`https://github.com/login/oauth/authorize?client_id=${window.gitHubClient_id}`}>Login With Github</a>
          </div> 
      
     
      {
        <div>
            <Routes>
              <Route path='/home' element={ <Home /> } />
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/menu' element={ <DrinkProducts /> } />
              <Route path='/menu/:id' element={ <DrinkProductPage /> } />
              <Route path='/merch' element={ <Merchs /> } />
              <Route path='/merch/:id' element={ <Merch /> } />
              <Route path='/register' element={ <Register />} />
              <Route path='/login' element={ <Login />} />
              <Route path='/logout' element={ <Logout />} />
              <Route path='/account' element={ <Account /> } />
              {/* <Route path='/about' element={ <About /> } /> */}
            </Routes>
          </div>
        // )
      }
    </div>
  );
};

export default App;
