'use strict';

const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const router = express.Router();
const Bride = require('../models/bride');
const path = require('path');
const fileUpload = require('express-fileupload');

const jwtAuth = passport.authenticate('jwt', {session:false, failWithError: true});

router.get('/photos/:brideId', (req, res) => {
	Bride.findById(req.params.brideId)
	.then(user => {
		res.json(bride.photos)
	})
	.catch(err)
})




router.post('/photos/:id', jwtAuth, (req, res, next) => {
	const { id } = req.params;
	const imgPath = `../tmp/photos/${req.files.file.name}`;
	const imgClientPath = `photos/${req.files.file.name}`;
	const imageFile = req.files.file;
	console.log(imageFile);
	const image = {
		
		photo: imgClientPath,
	}
	imageFile.mv(path.join(__dirname, imgPath), (err) => {
		console.log(err);
		Bride.findByIdAndUpdate(id, {$push:{photos:image}}, {new: true}, function (err,bride) {
			if (err) 
			return handleError(err);
			res.json(`/photos/${req.files.file.name}`);
		})

	})
  })

module.exports = router;