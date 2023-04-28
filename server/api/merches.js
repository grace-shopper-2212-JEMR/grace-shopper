const express = require('express');
const app = express.Router();
const {Merch} = require('../db')
const { isLoggedIn } = require('./middleware.js');


// prefix is /api/merches
app.get('/', async(req, res, next)=> {
  try {
    console.log('MFFFFFFFFFFFFfff')
    res.send(await Merch.findAll())
  }
  catch(ex){
    next(ex)
  }
});

app.get('/:id', async(req, res, next)=> {
  try {
    res.send(await Merch.findByPk(req.params.id))
  }
  catch(ex){
    next(ex)
  }
});

module.exports = app;
