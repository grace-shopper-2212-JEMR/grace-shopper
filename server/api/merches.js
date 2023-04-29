const express = require('express');
const app = express.Router();
const {Product} = require('../db')
const { Op } = require("sequelize");

const { isLoggedIn } = require('./middleware.js');


// prefix is /api/merches
app.get('/', async(req, res, next)=> {
  try {
    res.send(await Product.findAll({
      where: {
        [Op.or]: [
        {category: 'shirt'},
        {category: 'hat'},
        {category: 'mug'},
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

module.exports = app;
