'use strict';

const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());

router.get('/users', (req, res, next)=> {
  User.find()
    .then(results => {
      res.json(results);
    })
    .catch(err => res.statusMessage(500).json({message: 'Internal server error'}));
}); 

router.get('/test', (req, res, next)=> {     
  res.json({test:'test'});    
}); 

router.post('/users', bodyParser.json(), (req, res, next) => {
  const requiredFields = ['username', 'password', 'fullName', 'email'];
  const missingField = requiredFields.find(field => !(field in req.body));
  
  if(missingField) {
    const err = new Error(`Missing ${missingField} in request body`);
    err.status = 422;
    return next(err);
  }

  const stringFields = ['fullName', 'email', 'username', 'password'];
  const nonStringFields = stringFields.find(field => field in req.body && typeof req.body[field] !== 'string');
  
  if(nonStringFields) {
    const err = new Error(`Field: '${nonStringFields}' must be type String`);
    err.status = 422;
    return next(err);
  }

  const explicityTrimmedFields = ['username', 'password'];
  const nonTrimmedField = explicityTrimmedFields.find(field => req.body[field].trim() !== req.body[field]);

  if (nonTrimmedField) {
    const err = new Error(`Field: '${nonTrimmedField}' cannot start or end with whitespace`);
    err.status = 422;
    return next(err);
  }
  

  let { fullName, email, username, password} = req.body;


  return User.hashPassword(password)
    .then(digest => {
      const newUser = {
        fullName,
        email,
        username,
        password: digest
      };
      return User.create(newUser);
    })
    .then(user => {
      return res.status(201).location(`${req.originalUrl}/${user.id}`).json(user);
    })
    .catch(err => {
      if (err.code === 11000) {
        err = new Error('The username already exists');
        err.status = 400;
      }
      next(err);
    });
});


module.exports = router;