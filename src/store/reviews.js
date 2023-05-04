import axios from "axios";

const reviews = (state = [], action)=> {
  //** add this back */
    // if(action.type === 'SET_REVIEWS'){
    //   return action.reviews;
    // };
    if(action.type === 'REQUEST_REVIEWS'){
      return action.reviews;
    };
    
    if(action.type === 'CREATE_REVIEW'){
      return [action.review, ...state]
    };
    if(action.type === 'EDIT_REVIEW'){
      state = state.map(review => {
        if (review.id === action.review.id){
          return action.review
        }
        return review
      })
    };
    if(action.type === 'DELETE_REVIEW'){
      return state.filter(_review => _review.id !== action.reviewId)
    }
    // if(action.type === 'REQUEST_REVIEWS'){
    //   state = state.map(review => {
    //     if (reviews.id === action.userId){
    //       return action.reviews
    //     }
    //   })
    // };
    return state;
  };

 // fetch all reviews**
  // export const fetchReviews = () => {
  //   return async(dispatch) => {
  //     const response = await axios.get('/api/reviews');
  //     dispatch({type: 'SET_REVIEWS', reviews: response.data})
  //   }
  // }

  // fetch reviews that belong to a user
  export const fetchUserReviews = ()=> {
    return async(dispatch)=> {
      const token = window.localStorage.getItem('token')
      const response = await axios.get(`/api/reviews/${token}`);
      dispatch({type: 'REQUEST_REVIEWS', reviews: response.data})
    };
  };

 


  export const createReview = (review)=> {
    return async(dispatch)=> {

      const response = await axios.post(`api/auth/reviews`, review);
      console.log(response, 'response')

      dispatch({type: 'CREATE_REVIEW', review: response.data})
    };
  };
  

  export const editReview = (review)=> {
    return async(dispatch)=> {
      const response = await axios.put(`api/auth/reviews/${review.id}`, review);
      dispatch({type: 'EDIT_REVIEW', review: response.data})
    };
  };


  export const deleteReview = (review)=> {
    return async(dispatch)=> {
      await axios.delete(`api/auth/reviews/${review.id}`);
      dispatch({type: 'DELETE_REVIEW', reviewId: review.id})
    };
  };
  
  

export default reviews;