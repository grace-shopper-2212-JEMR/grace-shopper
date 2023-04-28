import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import Register from './Register';
import Nav from './Nav';

import DrinkProducts from './DrinkProducts';
import DrinkProductPage from './DrinkProductPage';
import Merches from './Merches';
import Merch from './Merch';
import Account from './Account';
import About from './About';
import Logout from './Logout';

import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart, fetchDrinks, fetchMerches } from '../store';
import { Link, Routes, Route } from 'react-router-dom';

const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchDrinks());
  }, [])
  useEffect(()=>{
    dispatch(fetchMerches());
  }, [])
  useEffect(()=> {
    dispatch(loginWithToken());
  }, []);

  useEffect(()=> {

    if(auth.id){
      dispatch(fetchCart());
    }
  }, [auth]);
  return (
    <div>
      <Nav />
      <h1>Acme Shopping</h1>
      {/* {
        auth.id ? <Home /> : <Login />
      } */}
      {
        // !!auth.id  && (
          <div>
             {/* <nav>
              <Link to='/'>Home</Link>
              <Link to='/cart'>Cart</Link>

              <Link to='/menu'>Menu</Link>
              <Link to='/menu/:id'>Menu (single)</Link>
              <Link to='/merch'>Merch</Link>
              <Link to='/merch/:id'>Merch Detail</Link>
              
            </nav> */}

            <Routes>
              <Route path='/home' element={ <Home /> } />
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/menu' element={ <DrinkProducts /> } />
              <Route path='/menu/:id' element={ <DrinkProductPage /> } />
              <Route path='/merch' element={ <Merches /> } />
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
