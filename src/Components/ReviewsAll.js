import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const ReviewsAll  = ()=> {
    const { reviews } = useSelector(state => state)
    
    return (
        <div>
            <h2>Read Our Reviews!</h2>
            <div className="formBlock">
            <div className="form">
        <ul>
            {
                reviews.map( review => {
                    return (
                        <li>
                           Subject: {review.subject}<br/>
                           Description:  {review.description}<br/>
                            Rating: {review.rating}<br/><br/>
                        </li>
                    )
                })
            }
        </ul>
        </div>
        </div>
        </div>
    )
}

export default ReviewsAll;
