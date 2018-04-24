'use strict';

const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const bodyParser = require('body-parser');
const router = express.Router();


router.get('/users', (req, res, next)=> {
  User.find()
    .then(results => {
      res.json(results);
    })
    .catch(err => res.statusMessage(500).json({message: 'Internal server error'}));
}); 


router.post('/users', bodyParser.json(), (req, res, next) => {
  console.log(req.body);

  let { fullName, email, username, password} = req.body;
  fullName = fullName.trim();

  const requiredFields = ['username', 'password'];
  const missingField = requiredFields.find(field => !(field in req.body));
  
  return User.find({username})
    .count()
    .then(count => {
      if (count > 1) {
        return Promise.reject({
          code: 422,
          reason: 'ValidationError',
          message: 'Username already taken',
          location: 'username'
        });
      } 
      return res.status(201).json(username);
    })
    .catch(err => {
      console.log(err);
      if (err.reason=== 'ValidationError') {
        return res.status(err.code).json(err);
      }
      res.status(500).json({code:500, message: 'Internal server error'});
    });
});


module.exports = router;