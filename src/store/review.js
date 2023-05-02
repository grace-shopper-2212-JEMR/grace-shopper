import axios from "axios";

const reviews = (state = [], action)=> {
    if(action.type === 'SET_REVIEWS'){
      return action.reviews;
    }
    if(action.type === 'CREATE_REVIEW'){
      return [action.review, ...state]
    }
    if(action.type === 'EDIT_REVIEW'){
      state = state.map(review => {
        if (review.id === action.review.id){
          return action.review
        }
        return review
      })
    }
    if(action.type === 'DELETE_REVIEW'){
      return state.filter(_review => _review.id !== action.review.id)
    }
    return state;
  };

  export const fetchReviews = ()=> {
    return async(dispatch)=> {
      const response = await axios.get('/api/menu');
      dispatch({type: 'SET_REVIEWS', reviews: response.data})
    };
  };
  export const createReview = (review)=> {
    return async(dispatch)=> {
      const response = await axios.post(`api/menu`, review);
      console.log(response, 'response')
      dispatch({type: 'CREATE_REVIEW', review: response.data})
    };
  };
  export const editReview = (review)=> {
    return async(dispatch)=> {
      const response = await axios.put(`api/menu/${review.id}`, review);
      dispatch({type: 'EDIT_REVIEW', review: response.data})
    };
  };
  export const deleteReview = (review)=> {
    return async(dispatch)=> {
      await axios.delete(`api/menu/${review.id}`);
      dispatch({type: 'DELETE_REVIEW', review})
    };
  };
  







export default reviews;