import axios from 'axios';

const drinks = (state = [], action)=> {
  if(action.type === 'SET_DRINKS'){
    return action.drinks;
  }
  if(action.type === 'CREATE_DRINK'){
    return [action.drink, ...state]
  }
  if(action.type === 'EDIT_DRINK'){
    state = state.map(drink => {
      if (drink.id === action.drink.id){
        return action.drink
      }
      return drink
    })
  }
  if(action.type === 'DELETE_DRINK'){
    return state.filter(_drink => _drink.id !== action.drink.id)
  }
  return state;
};


export const fetchDrinks = ()=> {
  return async(dispatch)=> {
    const response = await axios.get('/api/drinks');
    console.log('response', response)
    dispatch({type: 'SET_DRINKS', drinks: response.data})
  };
};
export const createDrink = (drink)=> {
  return async(dispatch)=> {
    const response = await axios.post(`api/drinks`, drink);
    console.log(response, 'response')
    dispatch({type: 'CREATE_DRINK', drink: response.data})
  };
};
export const editDrink = (drink)=> {
  return async(dispatch)=> {
    const response = await axios.put(`api/drinks/${drink.id}`, drink);
    dispatch({type: 'EDIT_DRINK', drink: response.data})
  };
};
export const deleteDrink = (drink)=> {
  return async(dispatch)=> {
    await axios.delete(`api/drinks/${drink.id}`);
    dispatch({type: 'DELETE_DRINK', drink})
  };
};


export default drinks;
