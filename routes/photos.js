'use strict';


const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const router = express.Router();
const Photo = require('../models/photo');


const jwtAuth = passport.authenticate('jwt', {session:false, failWithError: true});

router.post('/upload/:id', jwtAuth, (req, res, next) => {
	const { id } = req.params;
	const newPhoto = new Photo;
	newPhoto.photo.data = req.files.file.data;
	newPhoto.photo.contentType = req.files.file.mimetype;
	newPhoto.brideId = id;
	newPhoto.save(function (error, dbImg) {
		if(error){
			console.log('error writing image', error);
			throw error;
		} 
		console.log('saved image to db');
		res.status(201).end();
	})
	// let imageFile = req.files.file;
	// console.log(imageFile);
	// imageFile.mv(`${__dirname}/../uploads/${req.params.id}.jpg`, function(err) {
	//   if (err) {
	// 	return res.status(500).send(err);
	//   }
  
	//   res.json({file: `${req.params.id}.jpg`});
	// });
  
  })

module.exports = router;