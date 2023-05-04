import axios from 'axios';

const merches = (state = [], action)=> {
  if(action.type === 'SET_MERCHES'){
    return action.merches;
  }
  if(action.type === 'CREATE_MERCH'){
    return [action.merch, ...state]
  }
  if(action.type === 'EDIT_MERCH'){
    state = state.map(merch => {
      if (merch.id === action.merch.id){
        return action.merch
      }
      return merch
    })
  }
  if(action.type === 'DELETE_MERCH'){
    return state.filter(_merch => _merch.id !== action.merch.id)
  }
  return state;
};


export const fetchMerches = ()=> {
  return async(dispatch)=> {
    const response = await axios.get('/api/merches');
    dispatch({type: 'SET_MERCHES', merches: response.data})
  };
};
export const createMerch = (merch)=> {
  return async(dispatch)=> {
    const response = await axios.post(`api/merches`, merch);
    dispatch({type: 'CREATE_MERCH', merch: response.data})
  };
};
export const editMerch = (merch)=> {
  return async(dispatch)=> {
    const response = await axios.put(`api/merches/${merch.id}`, merch);
    dispatch({type: 'EDIT_MERCH', merch: response.data})
  };
};
export const deleteMerch = (merch)=> {
  return async(dispatch)=> {
    await axios.delete(`api/merches/${merch.id}`);
    dispatch({type: 'DELETE_MERCH', merch})
  };
};


export default merches;
