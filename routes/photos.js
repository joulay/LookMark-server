

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
	const imgClientPath = `/tmp/photos/${req.files.file.name}`;
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
			res.send(`/photos/${req.files.file.name}`);
		})

	})
		// .then(bride => {
		// 	bride.photos.push(image); //
		// 	bride.save(err => {
		// 		console.log(err)
		// 		return res.json(bride);
		// 	})
		// })
		// .catch(err => {
		// 	console.log(err);
		// 		return res.status(500).json({
		// 	message: 'Internal server error'
		// })})
//

	// const { id } = req.params;
	// const newPhoto = new Photo;
	// newPhoto.photo.data = req.files.file.data;
	// newPhoto.photo.contentType = req.files.file.mimetype;
	// newPhoto.brideId = id;
	// newPhoto.save(function (error, dbImg) {
	// 	if(error){
	// 		console.log('error writing image', error);
	// 		throw error;
	// 	} 
	// 	console.log('saved image to db');
	// 	res.status(201).end();
	// })
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