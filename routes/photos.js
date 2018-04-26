'use strict';

// const express = require('express');
// const bodyParser = require('body-parser');
// const router = express.Router();
// const path = require('path');
// const crypto = require('crypto');
// const multer = require('multer');
// const GridFsStorage = require('multer-gridfs-storage');
// const Grid = require('gridfs-stream');
// const methodOverride = require('method-override');
// const passport = require('passport');
// const mongoose = require('mongoose');


// router.get('/photo', (req, res) => {
//   res.render('great');
  
// });


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost/gridfs');

// const conn = mongoose.connection;
// const path = require('path');

// const Grid = require('gridfs-stream');
// const fs = require('fs');

// // setting up the necessary paths for the files needed to store:
// const videoPath = path.join(__dirname, '../vids/Suzie.mp4');
// const picPath = path.join(__dirname, '../pics/Sticky.jpg');

// // connecting to GridFS/Mongo via mongoose:
// Grid.mongo = mongoose.mongo;

// conn.once('open', function() {
//   console.log(' Connection Opened ');
// 	const gfs = Grid(conn.db);
  
// 	// once connection opened
// 	// we can then store the needed file in db
// 	const writeStream = gfs.createWriteStream({
//     // we can use whatever name we can
// 		// to store the file in our db
// 		filename: 'SuzieVid.mp4'
// 	});
  
// 	// then we create a read-stream from where
// 	// the file is currently stored, in videoPath or picPath,
// 	// and "pipe" it to the database:
// 	fs.createReadStream(videoPath).pipe(writeStream);
  
// 	// we have access to the file stored.
// 	// we can also do something when writing is done:
// 	writeStream.on('close', function(file){
//     // in here we have access to the stored file,
// 		// so we're simply printing its name for now:
// 		console.log(file.filename + ' was successfully written to DB');
// 	});
  
// });

// module.exports = router;