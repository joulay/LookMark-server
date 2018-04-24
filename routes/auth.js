'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');


const options = {session: false, failWithError: true};

const localAuth = passport.authenticate('local', options);

function createAuthToken (user) {
  return jwt.sign({ user }, JWT_SECRET, {
    subject: user.username,
  });
}


router.post('/login', localAuth, (req, res) => {
  const authToken = createAuthToken(req.user);
  return res.json({ authToken });
});

const jwtAuth = passport.authenticate('jwt', { session: false, failWithError: true });

router.post('/refresh', jwtAuth, (req, res) => {
  const authToken = createAuthToken(req.user);
  res.json({ authToken });
});


module.exports = router;