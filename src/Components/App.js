import React, { useEffect, useRef } from 'react';
import Home from './HomeComponents/Home';
import Login from './Login';
import Cart from './Cart';
import Checkout from './Checkout';
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
import About from './About/About';
import AboutLocations from './About/AboutLocations';
import AboutCareers from './About/AboutCareers';
import AboutContact from './About/AboutContact';
import Logout from './Logout';
import Review from './Review';


import Admin from './Admin/Admin';
import AdminDrinksMain from './Admin/AdminDrinksMain';
import AdminMerch from './Admin/AdminMerchesMain';
import AdminDrinksCreate from './Admin/AdminDrinksCreate';
import AdminDrinksDrink from "./Admin/AdminDrinksDrink";

import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart, fetchDrinks, fetchMerches } from '../store';
import { Link, Routes, Route } from 'react-router-dom';


const App = ()=> {
  const { auth } = useSelector(state => state);
  const dispatch = useDispatch();
  const prevAuth = useRef({});

  useEffect(()=>{
    dispatch(fetchDrinks());
    dispatch(fetchMerches());
    dispatch(loginWithToken());
  }, [])

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
    <div >
      <Nav />
        <img src='static\images\coffee_cup_illustration_blue.jpeg' style={{width: '100%'}}></img>     
        {/* original color of this image is #7CC9D1 */}

        <div className='app-body'>
        
        
          {/* THIS DIV IS SO THE FOOTER STICKS TO THE BOTTOM */}
          {/* <a href={`https://github.com/login/oauth/authorize?client_id=${window.client_id}`}>Login With Github</a> */}

          
      

            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/home' element={ <Home /> } />
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/checkout' element={ <Checkout /> } />

              <Route path='/admin' element= { <Admin /> }/>
              <Route path='/admin/drinks' element= { <AdminDrinksMain />} />
              <Route path= '/admin/drinks/:id' element= { <AdminDrinksDrink /> } />
              <Route path='/admin/merch' element = { <AdminMerch /> } />
              <Route path='/admin/drinks/create' element = { <AdminDrinksCreate /> } />

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

              <Route path='/reviews' element={ <Review />} />
              <Route path='/register' element={ <Register />} />
              <Route path='/login' element={ <Login />} />
              <Route path='/logout' element={ <Logout />} />
              <Route path='/account' element={ <Account /> } />
              <Route path='/about' element={ <About /> } />
              <Route path='/about/locations' element={<AboutLocations />}/>
                <Route path='/about/careers' element={<AboutCareers />}/>
                <Route path='/about/contact' element={<AboutContact />}/>
            </Routes>
            
          </div>
     
        


         <Nav />
    </div>
    // </div>  
  );
};

export default App;
