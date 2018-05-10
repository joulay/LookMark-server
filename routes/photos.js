'use strict';

const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport');
const router = express.Router();
const Bride = require('../models/bride');
const path = require('path');
const fileUpload = require('express-fileupload');
const imgur = require('imgur');

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
	const imageFile = req.files.file;
	const encoded = imageFile.data.toString('base64')   

	imgur.uploadBase64(encoded)   
	.then(function (json) {       
		let url = json.data.link;  
		const image = { photo: url }
		  Bride.findByIdAndUpdate(id, {$addToSet:{photos:image}}, {new: true}, function (err,bride) {
			if (err) 
				return handleError(err);
				res.json(image); 	
		})   
	  .catch(function (err) {       
		console.error('err', err);   
		});
			

	// imageFile.mv(path.join(__dirname, imgPath), (err) => {
	// 	console.log(err);
	// 	Bride.findByIdAndUpdate(id, {$push:{photos:image}}, {new: true}, function (err,bride) {
	// 		if (err) 
	// 		return handleError(err);
	// 		res.json(`/photos/${req.files.file.name}`);
	// 	})

	})
})

router.delete('/photos/:id', jwtAuth, (req, res) => {

	console.log('sldkfjslkdfjslkdjf', req.user.id);
	Bride.findByIdAndUpdate(req.params.id, {$pull:{"photos":{photo:req.body.photo}}}, {new:true})
	.then((user)=> {
		console.log(user)
		res.status(204).end();
	})
	.catch(err=> {
		console.log('sldkfjlsdjkflsdkfjsldkjf',err);
		next(err);
	})
})

module.exports = router;