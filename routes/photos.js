'use strict';


const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const router = express.Router();

const jwtAuth = passport.authenticate('jwt', {session:false, failWithError: true});

router.post('/upload/:id', jwtAuth, (req, res, next) => {
	const { id } = req.params;
	let imageFile = req.files.file;
	console.log(imageFile);
	imageFile.mv(`${__dirname}/../uploads/${req.params.id}.jpg`, function(err) {
	  if (err) {
		return res.status(500).send(err);
	  }
  
	  res.json({file: `${req.params.id}.jpg`});
	});
  
  })

module.exports = router;