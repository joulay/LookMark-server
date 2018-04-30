'use strict';


const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const router = express.Router();

const jwtAuth = passport.authenticate('jwt', {session:false, failWithError: true});

router.post('/upload', jwtAuth, (req, res, next) => {
	console.log(req.user);
	let imageFile = req.files.file;
	console.log(imageFile);
	imageFile.mv(`${__dirname}/../uploads/${req.user.id}.jpg`, function(err) {
	  if (err) {
		return res.status(500).send(err);
	  }
  
	  res.json({file: `${req.user.id}.jpg`});
	});
  
  })

module.exports = router;