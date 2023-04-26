const express = require('express');
const app = express.Router();
const path = require('path')
const { User } = require('../db');


app.use(express.json());
app.use('/dist', express.static(path.join(__dirname, '../dist')))

app.post('/register', async(req, res, next)=> {
    try{
      res.send(await User.register(req.body)); 
    }
    catch(ex){
      next(ex);
    }
  });

  app.use('/api/auth', require('./routes/auth'));

  module.exports = register;