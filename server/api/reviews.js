const express = require('express');
const app = express.Router();
const { Product, Review, User } = require('../db');
const { Op } = require("sequelize");

const { isLoggedIn } = require('./middleware.js');

// get all the reviews
app.get('/', async(req, res, next)=> {
    try{
        res.send(await Review.findAll())
    }
    catch(ex){
        next(ex)
    }
});

// get all the reviews for a user 
 
app.get('/:token', async(req, res, next)=> {
    try{
      const user = await User.findByToken(req.params.token);
      const reviews = await Review.findAll({
        where: {
          userId: user.id
        }
      });
      res.send(reviews);
    }
    catch(ex){
      next(ex);
    }
  });

// get a single review :: /api/auth/reviews/:reviewId
app.get('/:reviewId', async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.reviewId, {
      include: [{ model: Product, attributes: ['id', 'name'] }]
    });
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json(review);
  } catch (err) {
    next(err);
  }
});



// add review :: /api/auth/reviews
app.post('/:token', isLoggedIn, async (req, res, next) => {
  try {
    await User.findByToken(req.params.token);
    res.status(201).send(await Review.create(req.body))
  } 
  catch (ex) {
    next(ex);
  }
});


// delete review :: /api/auth/reviews/:reviewId
app.delete('/reviews/:id', isLoggedIn, async(req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.id)
    console.log('This does not work!!!!')
    await review.destroy()
    res.sendStatus(204);
  } catch(err){
    next(err)
    }
});

// // update review :: /api/auth/reviews/:reviewId
// app.put('/:reviewId', isLoggedIn, async (req, res, next) => {
//   try {
//     const { subject, description, rating } = req.body;
//     const [rowsUpdated, [updatedReview]] = await Review.update(
//       { subject, description, rating },
//       { where: { id: req.params.reviewId, userId: req.user.id }, returning: true }
//     );
//     if (rowsUpdated === 0) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }
//     res.json(updatedReview);
//   } catch (err) {
//     next(err);
//   }
// });


module.exports = app;