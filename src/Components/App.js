import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import DrinkProducts from './DrinkProducts';
import DrinkProductPage from './DrinkProductPage';
import Merchs from './Merchs';
import Merch from './Merch';
import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart } from '../store';
import { Link, Routes, Route } from 'react-router-dom';

const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
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
      <h1>Acme Shopping</h1>
      {
        auth.id ? <Home /> : <Login />
      }
      {
        !!auth.id  && (
          <div>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/cart'>Cart</Link>
              <Link to='/menu'>Home</Link>
              <Link to='/menu/:id'>Home</Link>
              <Link to='/merch'>Cart</Link>
              <Link to='/merch/:id'>Cart</Link>
              
            </nav>
            <Routes>
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/menu' element={ <DrinkProducts /> } />
              <Route path='/menu/:id' element={ <DrinkProductPage /> } />
              <Route path='/merch' element={ <Merchs /> } />
              <Route path='/merch/:id' element={ <Merch /> } />
            </Routes>
          </div>
        )
      }
    </div>
  );
};

export default App;
