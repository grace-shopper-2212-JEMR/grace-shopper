const express = require('express');
const app = express.Router();
const {Product} = require('../db')
const { Op } = require("sequelize");
const { isLoggedIn } = require('./middleware.js');


// prefix is /api/menu
app.get('/', async(req, res, next)=> {
  try {
    res.send(await Product.findAll({
      where: {
        [Op.or]: [
        {category: 'coffee'},
        {category: 'tea'},
        {category: 'smoothie'},
        ]
    }}))
  }
  catch(ex){
    next(ex)
  }
});

app.get('/:id', async(req, res, next)=> {
  try {
    res.send(await Product.findByPk(req.params.id))
  }
  catch(ex){
    next(ex)
  }
});

app.get('/coffee', async(req, res, next)=> {
  try {
    res.send(await Product.findAll({
      where: {
        category: 'coffee'      
    }}))
  }
  catch(ex){
    next(ex)
  }
});
app.get('/tea', async(req, res, next)=> {
  try {
    res.send(await Product.findAll({
      where: {
        category: 'tea'      
    }}))
  }
  catch(ex){
    next(ex)
  }
});
app.get('/smoothies', async(req, res, next)=> {
  try {
    res.send(await Product.findAll({
      where: {
        category: 'smoothie'      
    }}))
  }
  catch(ex){
    next(ex)
  }
});
app.post('/', async (req, res, next)=> {
  try {
    res.send(await Product.create(req.body))
  }
  catch(ex) {
    next(ex)
  }
});

app.delete('/', async(req, res, next) => {
  try{
    const drink = await Drink.findByPk(req.params.id)
    await drink.destroy() 
    res.sendStatus(204) 
  }
  catch(ex) {
    next(ex)
  }
});

module.exports = app;
