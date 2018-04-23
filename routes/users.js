'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const User = require('../models/user');

router.get('/users', (req, res, next)=> {
  User.find().then(results => {
    res.json(results);
  });
});