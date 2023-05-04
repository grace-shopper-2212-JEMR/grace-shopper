
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  review } from '../store';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { Box, Button, IconButton, TableCell, TableRow } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';


const Review = ()=> {
const navigate = useNavigate();
const dispatch = useDispatch();
const {reviews} = useSelector(state => state);
const [subject, setSubject] = useState('');
const [description, setDescription] = useState('');
const [rating, setRating] = useState('');

const create = async( ev ) => {
  ev.preventDefault();
  try{
    await dispatch(createReview({ subject, description, rating}))
    setSubject('')
    setDescription('')
    setRating('')
    setErrors([])
  }
  catch(ex){
    setErrors(ex.response.data.error.errors)
  }
};

const destroy = async( review ) => {
  dispatch(destroyReview(review))
};
return(
  <div className='formBlock'>
  <form className='form' onSubmit= {create}>
    <label htmlFor='subject'> 
                SUBJECT
                <em>*</em>
        <input value={subject}
        id = 'subject'
        name = 'subject' 
        onChange={ ev => setSubject(ev.target.value)} 
        placeholder= 'Subject'/> {''}
    </label>

    <label htmlFor = 'item'></label>
        ITEM
    <div className= 'formdropdown'>
      {/* <select id = 'item' name = 'item' value = {productId} onChange={ ev => setProductsId(ev.target.value)}></select> */}
    </div>

    <label htmlFor='description'> 
                DESCRIPTION
                <em>*</em>
        <input value={description}
        id = 'description'
        name = 'description' 
        onChange={ ev => setDescription(ev.target.value)} 
        placeholder= 'Description'/> {''}
    </label>

    <label htmlFor='rating'> 
                RATING
                <em>*</em>
        <input value={rating}
        id = 'rating'
        name = 'rating' 
        onChange={ ev => setRating(ev.target.value)} 
        placeholder= 'Rating 1 - 10'/> {''}
    </label>
  </form>

  </div>
)




}

export default Review;
// const ReviewItem = ({ review, deleteReview }) => (
//   <TableRow>
//     <TableCell>{review.id}</TableCell>
//     <TableCell>{review.rating}</TableCell>
//     <TableCell>{review.subject}</TableCell>
//     <TableCell>{review.product.name}</TableCell>
//     <TableCell>{review.userId}</TableCell>
//     <TableCell>
//       <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//         <IconButton component={Link} to={`/reviews/${review.id}`}>
//           <Edit />
//         </IconButton>
//         <IconButton onClick={(event) => deleteReview(event, review)}>
//           <Delete />
//         </IconButton>
//       </Box>
//     </TableCell>
//   </TableRow>
// );

// export default ReviewItem;