
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  createReview } from '../store';
import { useNavigate } from 'react-router-dom';

const Review = ()=> {
const navigate = useNavigate();
const dispatch = useDispatch();
const {reviews} = useSelector(state => state);
const {merches, drinks} = useSelector(state => state);
const [subject, setSubject] = useState('');
const [description, setDescription] = useState('');
const [rating, setRating] = useState('');
const [drinkId, setDrinkId] = useState('')
const [merchId, setMerchId] = useState('')
const [errors, setErrors] = useState([]);
const create = async( ev ) => {
  ev.preventDefault();
  try{
    await dispatch(createReview({ subject, description, rating, drinkId, merchId}))
    setSubject('')
    setDescription('')
    setRating('')
    setDrinkId('')
    setMerchId('')
    setErrors([])
  }
  catch(ex){
    setErrors(ex.response.data.error)
  }
};

const destroy = async( review ) => {
  dispatch(destroyReview(review))
};
return(
  <div className='formBlock'>
  <form className='form' onSubmit= {create}>
    <div>Please choose the item to review from the dropdown menu</div>
    <label htmlFor = 'drink'></label>
        Drinks
    <div className= 'formdropdown'>
      <select id = 'drink' name = 'drink' value = {drinkId} onChange={ ev => setDrinkId(ev.target.value)}>
      <option defaultValue = 'selected hidden'> Select Item</option>
           
           {
             drinks.map(drink => {
               return (
                 <option value = {drink.id} key = {drink.id}> {drink.name}</option>
               )
             })
           }
    
        </select> 
    </div>

    <label htmlFor = 'merch'></label>
        Merch
    <div className= 'formdropdown'>
      <select id = 'merch' name = 'merch' value = {merchId} onChange={ ev => setMerchId(ev.target.value)}>
      <option defaultValue = 'selected hidden'> Select Item</option>
           
           {
             merches.map(merch => {
               return (
                 <option value = {merch.id} key = {merch.id}> {merch.name}</option>
               )
             })
           }
    
        </select> 
    </div>

    <label htmlFor='subject'> 
                SUBJECT
                <em>*</em>
        <input value={subject}
        id = 'subject'
        name = 'subject' 
        onChange={ ev => setSubject(ev.target.value)} 
        placeholder= 'Subject'/> {''}
    </label>


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

    <button className='formButton' disabled={ !subject && !description && !rating }>Submit Your Review</button>
        <ul>
                {
                    errors.map((error, idx)=> {
                        return (
                            <li key = {idx}>
                                {error.message}
                            </li>
                        )
                    })
                }
            </ul>
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