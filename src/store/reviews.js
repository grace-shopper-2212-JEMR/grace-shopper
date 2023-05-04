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
    if(action.type === 'REQUEST_REVIEW'){
      state = state.map(review => {
        if (review.id === action.userId){
          return action.review
        }
      })
    }
    if(action.type === 'DELETE_REVIEW'){
      return state.filter(_review => _review.id !== action.reviewId)
    }
    return state;
  };

  export const fetchReviews = ()=> {
    return async(dispatch)=> {
      const token = window.localStorage.getItem('token')
      const response = await axios.get(`/api/reviews/${token}`);
      dispatch({type: 'SET_REVIEWS', reviews: response.data})
    };
  };

  export const fetchUserReviews = (userId) => {
    return async(dispatch)=> {
        const response = await axios.get(`/api/reviews/user/${userId}`)
        dispatch({type: REQUEST_REVIEW, reviews: response.data})
    }
  };


  export const createReview = (review)=> {
    return async(dispatch)=> {
      const response = await axios.post(`api/reviews`, review);
      console.log(response, 'response')
      dispatch({type: 'CREATE_REVIEW', review: response.data})
    };
  };
  

  export const editReview = (review)=> {
    return async(dispatch)=> {
      const response = await axios.put(`api/reviews/${review.id}`, review);
      dispatch({type: 'EDIT_REVIEW', review: response.data})
    };
  };


  export const deleteReview = (review)=> {
    return async(dispatch)=> {
      await axios.delete(`api/reviews/${review.id}`);
      dispatch({type: 'DELETE_REVIEW', review})
    };
  };
  
  

export default reviews;