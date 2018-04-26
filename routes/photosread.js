// 'use strict';

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost/gridfs');

// const conn = mongoose.connection;
// const path = require('path');

// const Grid = require('gridfs-stream');
// const fs = require('fs');

// // connecting to GridFS/Mongo via mongoose:
// Grid.mongo = mongoose.mongo;

// conn.once('open', function() {
// 	console.log(' Connection Opened ');
// 	const gfs = Grid(conn.db);

// 	// now we need to write the file/s stored in DB
// 	// onto our computer/locally
// 	const writeStream = fs.createWriteStream(path.join(__dirname, '../vids/vidFromDB.mp4'));

// 	// now we need to create a read-stream from Mongo
// 	// and we can supply either the filename given, or,
// 	// its ID. Here we're using the simpler filename:
// 	const readStream = gfs.createReadStream({
// 		filename: 'SuzieVid.mp4'
// 	});

// 	// now we "pipe" the read-stream to the write-stream:
// 	readStream.pipe(writeStream);

// 	// and again we can do something when we're done "piping":
// 	writeStream.on('close', function(){
// 		console.log('File successfully written locally');
// 	});
// });

