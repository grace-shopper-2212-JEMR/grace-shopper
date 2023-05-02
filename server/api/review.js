const express = require('express');
const app = express.Router();
const {Product} = require('../db')
const { Op } = require("sequelize");

const { isLoggedIn } = require('./middleware.js');

app.get('/', async(req, res, next)=> {
    const {rating, comment, productId} = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment
    }
})
 
const product = await Product.findById(productId)
const isReviewed = product.reviews.find(
    r => r.user.toString() === req.user._id.toString()
)

if(isReviewed) {
    product.reviews.forEach(review => {
        if(review.user.toString() === req.user._id.toString()) {
            review.comment = comment;
            review.rating = rating;
        }
    })
} else {
    product.reviews.push(review)
    product.numOfReviews = product.reviews.length    
}