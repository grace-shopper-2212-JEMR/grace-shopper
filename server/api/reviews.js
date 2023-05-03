const express = require('express');
const app = express.Router();
const {Product, Review} = require('../db')
const { Op } = require("sequelize");

const { isLoggedIn } = require('./middleware.js');

// get all the reviews :: /api/auth/reviews

app.get('/', async(req, res, next)=> {
    try{
        const reviews = await Review.findAll({
            include: [{
                model: Product,
                attributes: ['id', 'name', ]
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

app.post('/', async (req, res, next) => {
    try {
      const newReview = await Review.create({
        content: req.body.review.content,
        rating: req.body.review.rating,
      })
  
      newReview.setProduct(req.body.productId)
      newReview.setUser(req.body.userId)
  
      res.status(201).json(newReview)
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

// delete review :: /api/auth/reviews/:reviewId
// may need isAllowed
app.delete('/:reviewId', async(req, res, next)=> {
    try{
        const reviewDelete = await Review.findById(req.params.reviewId)
        Review.destroy(reviewDelete)
    } catch(err) {
        next(err)
    }
});



module.exports = app;