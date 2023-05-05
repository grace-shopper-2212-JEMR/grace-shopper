import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReview, deleteReview } from '../store'; 
import { useNavigate } from 'react-router-dom';

const Review = ({ match }) => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth, reviews, merches, drinks } = useSelector(state => state);
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [drinkId, setDrinkId] = useState('');
  const [merchId, setMerchId] = useState('');
  const [errors, setErrors] = useState([]);

  

  const create = async (ev) => {
    ev.preventDefault();
    try {
      await dispatch(createReview({ subject, description, rating, drinkId, merchId }));
      setSubject('');
      setDescription('');
      setRating('');
      setDrinkId('');
      setMerchId('');
      setErrors([]);
    } catch (ex) {
      console.log(ex)
      setErrors(ex.response.data.error.errors);
    }
  };

  const destroy = async(review) => {
    await dispatch(deleteReview(review));
  };


  return (
    
    <div>
      <ul>
        {
        reviews.filter(review => review.userId === auth.id).map(review => {
          return (
          <li key={review.id}>
          {
            auth.id === review.userId ? 'YOURS': ''
          }
          <br />
          Subject: {review.subject}<br/>
          Review: {review.description}
          {
            auth.id === review.userId && (
              <button onClick={ ()=> destroy(review)}>X</button>
            )
          }
          </li>
          )
        })}
      </ul>
  
      <div className="formBlock">
        <form className="form" onSubmit={create}>
          <div>Please choose the item to review from the dropdown menu</div>
          <label htmlFor="drink">Drinks</label>
          <div className="formdropdown">
            <select
              id="drink"
              name="drink"
              value={drinkId}
              disabled={ merchId}
              onChange={(ev) => setDrinkId(ev.target.value)}
            >
              <option value="">
                Select Item
              </option>
              {drinks.map((drink) => {
                return (
                  <option value={drink.id} key={drink.id}>
                    {drink.name}
                  </option>
                );
              })}
            </select>
          </div>
  
          <label htmlFor="merch">Merch</label>
          <div className="formdropdown">
         
            <select
              id="merch"
              name="merch"
              value={merchId}
              disabled={ drinkId}
              onChange={(ev) => setMerchId(ev.target.value)}
            >
              <option value="">
                Select Item
              </option>
              {merches.map((merch) => {
                return (
                  <option value={merch.id} key={merch.id}>
                    {merch.name}
                  </option>
                );
              })}
            </select>
          </div>
  
          <label htmlFor="subject">
            Subject<em>*</em>
            <input
              value={subject}
              id="subject"
              name="subject"
              onChange={(ev) => setSubject(ev.target.value)}
              placeholder="Subject"
              required
            />{" "}
          </label>
  
          <label htmlFor="description">
            Description<em>*</em>
            <input
              value={description}
              id="description"
              name="description"
              onChange={(ev) => setDescription(ev.target.value)}
              placeholder="Description"
              required
            />{" "}
          </label>
  
          <label htmlFor="rating">
            Rating<em>*</em>
            <input
              value={rating}
              id="rating"
              name="rating"
              type="number"
              min="1"
              max="10"
              onChange={(ev) => setRating(ev.target.value)}
              placeholder="Choose rating from the dropdown menu"
              required
            />{" "}
          </label>
  
          <button
            className="formButton"
            disabled={!subject || !description || !rating}
          >
            Submit Your Review
          </button>
  
          <ul>
            {errors.map((error, idx) => {
              return <li key={idx}>{error.message}</li>;
            })}
          </ul>
        </form>
      </div>
    </div>
  );

}

export default Review;
