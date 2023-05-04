import React, { useEffect, useRef } from 'react';
import Home from './HomeComponents/Home';
import Login from './Login';
import Cart from './Cart';
import Checkout from './Checkout';
import Order from './Order';
import Register from './Register';
import Nav from './Nav';
import FooterNav from './FooterNav';
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
// import Reviews from './Reviews';

import Admin from './Admin/Admin';
import NotAdmin from './Admin/NotAdmin';
import AdminDrinksMain from './Admin/AdminDrinksMain';
import AdminDrinksCreate from './Admin/AdminDrinksCreate';
import AdminDrinksDrink from "./Admin/AdminDrinksDrink";
import AdminMerch from './Admin/AdminMerchesMain';
import CreateMerch from './Admin/AdminMerchsCreate';
import AdminMerchesMerch from './Admin/AdminMerchesMerch';

import { useSelector, useDispatch } from 'react-redux';
import { loginWithToken, fetchCart, fetchDrinks, fetchMerches, fetchReviews } from '../store';
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
    if(auth.id){
      dispatch(fetchReviews());
    }
  }, [auth]);

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

            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/home' element={ <Home /> } />
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/checkout' element={ <Checkout /> } />
              <Route path='/order/:id' element={ <Order /> } />

              {auth.adminStatus === true ? <Route path='/admin' element= { <Admin /> }/> : <Route path='/admin' element= { <NotAdmin /> }/>}
              <Route path='/admin/drinks' element= { <AdminDrinksMain />} />
              <Route path= '/admin/drinks/:id' element= { <AdminDrinksDrink /> } />
              <Route path='/admin/drinks/create' element = { <AdminDrinksCreate /> } />
              <Route path='/admin/merch' element = { <AdminMerch /> } />
              <Route path='/admin/merch/create' element = { <CreateMerch /> } />
              <Route path='/admin/merch/:id' element = { <AdminMerchesMerch /> } />


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
               {/* <Route path='/reviews' element={ <Reviews />} /> */}
              <Route path='/reviews' element={ <Review />} />

              <Route path='/register' element={ <Register />} />
              <Route path='/login' element={ <Login />} />
              <Route path='/logout' element={ <Logout />} />
              <Route path='/account' element={ <Account /> } />
              <Route path='/about' element={ <About /> } />
              <Route path='/about/locations' element={<AboutLocations />}/>
              <Route path='/about/careers' element={<AboutCareers />}/>
              <Route path='/about/contact' element={<AboutContact />}/>
              <Route path='/menu/search/:filterString' element = { < DrinkProducts />} />
              <Route path='/merch/search/:filterString' element = { < Merches />} />
            </Routes>
            
          </div>
    
         <FooterNav />
    </div>
    // </div>  
  );
};

export default App;
