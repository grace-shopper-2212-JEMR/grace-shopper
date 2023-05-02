import axios from 'axios';
const cart = (state = { lineItems: [] }, action)=> {
  if(action.type === 'SET_CART'){
    return action.cart;
  }
  
  return state;
};


export const fetchCart = ()=> {
  return async(dispatch)=> {
    const token = window.localStorage.getItem('token');
    const response = await axios.get('/api/orders/cart', {
      headers: {
        authorization: token
      }
    });
    dispatch({ type: 'SET_CART', cart: response.data });
  };
};

export const addToCart = (product, quantity) => {
  return async(dispatch)=> {
    const token = window.localStorage.getItem('token');
    const response = await axios.post('/api/orders/cart',{
      product,
      quantity
    }, {
      headers: {
        authorization: token
      }
    });
    console.log(response)
    dispatch({ type: 'SET_CART', cart: response.data });
  }
}




export default cart;
