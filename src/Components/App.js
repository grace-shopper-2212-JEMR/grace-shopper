import React, { useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import Cart from './Cart';
import Register from './Register';
import Nav from './Nav';
import DrinkProducts from './DrinkComponents/DrinkProducts';
import DrinksCoffees from './DrinkComponents/DrinksCoffees';
import DrinksTeas from './DrinkComponents/DrinksTeas';
import DrinksSmoothies from './DrinkComponents/DrinksSmoothies';
import DrinkProductPage from './DrinkComponents/DrinkProductPage';
import Merches from './MerchComponents/Merches';
import Merch from './MerchComponents/Merch';
import MerchShirts from './MerchComponents/MerchShirts';
import MerchHats from './MerchComponents/MerchHats';
import MerchMugs from './MerchComponents/MerchMugs';
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
      <h1>maybe instead of Acme Shopping we do a big page-wide pic?</h1>
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
                <Route path='/menu/coffee' element={<DrinksCoffees />}/>
                <Route path='/menu/tea' element={<DrinksTeas />}/>
                <Route path='/menu/smoothies' element={<DrinksSmoothies />}/>

              <Route path='/menu/:id' element={ <DrinkProductPage /> } />

              <Route path='/merch' element={ <Merches /> } />

                <Route path='/merch/shirts' element={<MerchShirts />}/>
                <Route path='/merch/hats' element={<MerchHats />}/>
                <Route path='/merch/mugs' element={<MerchMugs />}/>

              <Route path='/merch/:id' element={ <Merch /> } />


              <Route path='/register' element={ <Register />} />
              <Route path='/login' element={ <Login />} />
              <Route path='/logout' element={ <Logout />} />
              <Route path='/account' element={ <Account /> } />
              <Route path='/about' element={ <About /> } />
            </Routes>
          </div>
        // )
      }
    </div>
  );
};

export default App;
