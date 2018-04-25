'use strict';

const express = require('express');
const router = express.Router();

const passport = require('passport');
const mongoose = require('mongoose');

const Bride = require('../models/brides');

router.use(passport.authenticate('jwt', { session: false, failWithError: true }));

router.get('/brides', (req, res, next) => {
//   const { searchTerm, folderId, tagId } = req.query;
  const userId = req.user.id;
  
  let filter = {userId};

  Bride.find(filter)
    .sort('created') //sort by date
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      next(err);
    });
});


router.get('/brides/:id', (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.id;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    const err = new Error('The `id` is not valid');
    err.status = 400;
    return next(err);
  }
  
  Bride.findOne({_id:id, userId})
    .then(result => {
      if (result) {
        res.json(result);
      } else {
        next();
      }
    })
    .catch(err => {
      next(err);
    });
});


router.post('/brides', (req, res, next) => {
  const { firstName, lastName, weddingDate, location} = req.body;
  const userId = req.user.id;
  const newBride = { firstName, lastName, weddingDate, location, userId };
  
  Promise.all()
    .then(() =>
      Bride.create(newBride))
    .then(result => {
      res.location(`${req.originalUrl}/${result.id}`).status(201).json(result);
    })
    .catch(err => {
      next(err);
    });
});
