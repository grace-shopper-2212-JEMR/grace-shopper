const express = require('express');
const app = express.Router();
const {Product, Review, User} = require('../db')
const { Op } = require("sequelize");

const { isLoggedIn } = require('./middleware.js');

// get all the reviews :: /api/auth/reviews

app.get('/', async(req, res, next)=> {
    try{
        const reviews = await Review.findAll({
            include: [{
                model: Product,
                attributes: ['id', 'name', 'rating', 'comment']
            }],
                order: [
                    ['productId'] // add 'ASC' later to this array. not sure what that is?
                ]
            })
           res.json(reviews)
        } catch (err){
            next(err)
        }
    });

// get a single review :: /api/auth/reviews/:reviewId
app.get('/:reviewId', async(req, res, next)=> {
    try {
        const review = await Review.findById(req.params.reviewId)
        res.json(review)
      } catch (err) {
        next(err)
    }
});

// get all reviews for a product :: /api/auth/product/:productId
app.get('/product/:productId', async (req, res, next)=> {
    try {
        const reviews = await Review.findAll({
            where: { productId: +req.params.productId}
        })
        res.json(reviews)
    } catch (err) {
        next(err)
    }
});

// get all the reviews for a user :: /api/auth/reviews/user/:userId
app.get('/user/:userid', async (req, res, next)=> {
    try {
        const reviews = await Review.findAll({
            where: {userId: +req.params.userId},
            include: [{
                model: Product,
                attributes: ['id, name']
            }]
        })
        res.json(reviews)
    } catch (err) {
        next (err)
    }
});

// add review :: /api/auth/reviews
// check if this is review or reviews if not working
Router.post('/', async (req, rest, next)=> {
    try {
        const newReview = await Review.create({
            content: req.body.reviews.content,
            rating: req.body.reviews.rating,
        })
        newReview.setProduct(req.body.productId)
        newReview.setUser(req.body.userId)

        res.status.(201).json(newReview)
    } catch (err) {
        next(err)
    }
})


//update review :: /api/auth/reviews/:reviewId
// may need isAllowed
app.put('/:reviewId', async(req, res, next)=> {
    try{
  const { data: review } = await Review.update(
    {
        content: req.body.review.content,
        rating: req.body.review.rating 
    },
    {
        where: { id: req.params.reviewId},
        returning: true,
        plain: true
    }
  )
  res.json(review)
    } catch (err) {
        next(err)
    }
})
// const product = await Product.findById(productId)
// const isReviewed = product.reviews.find(
//     r => r.user.toString() === req.user._id.toString()
// )

// if(isReviewed) {
//     product.reviews.forEach(review => {
//         if(review.user.toString() === req.user._id.toString()) {
//             review.comment = comment;
//             review.rating = rating;
//         }
//     })
// } else {
//     product.reviews.push(review)
//     product.numOfReviews = product.reviews.length    
// }

// product.ratings = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length

// await product.save({ validateBeforeSave: false});
// res.status(200).json
// success: true
// })

module.exports = review;