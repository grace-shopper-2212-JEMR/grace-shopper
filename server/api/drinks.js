const express = require('express');
const app = express.Router();
const {Drink} = require('../db')
const { isLoggedIn } = require('./middleware.js');


// prefix is /api/drinks
app.get('/', async(req, res, next)=> {
  try {
    res.send(await Drink.findAll())
  }
  catch(ex){
    next(ex)
  }
});

app.get('/:id', async(req, res, next)=> {
  try {
    res.send(await Drink.findByPk(req.params.id))
  }
  catch(ex){
    next(ex)
  }
});

module.exports = app;
