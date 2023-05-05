import React, { useState } from 'react';
import { useSelector } from 'react-redux';
const ReviewsAll  = ()=> {
    const { reviews } = useSelector(state => state)
    return (
        <ul>
            {
                reviews.map( review => {
                    return (
                        <li>
                            { review.description}
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default ReviewsAll;
