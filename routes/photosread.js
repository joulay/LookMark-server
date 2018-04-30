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









// import React, { Component } from 'react'

// import FineUploaderTraditional from 'fine-uploader-wrappers'
// import Gallery from 'react-fine-uploader'

// // ...or load this specific CSS file using a <link> tag in your document
// // import 'react-fine-uploader/gallery/gallery.css'


// //uploader is required property 
// //

// const uploader = new FineUploaderTraditional({
//     options: {
//        request: {
//           endpoint: 'my/upload/endpoint'
//        }
//     }
//  })

// class UploadComponent extends Component {
//     render() {
//         return (
            
//             <Gallery uploader={uploader} />
           
//         )
//     }
// }

// export default UploadComponent

// import React from 'react'
// import ReactDOM from 'react-dom'

// import FileInput from 'react-fine-uploader/file-input'
// import FineUploaderTraditional from 'fine-uploader-wrappers'

// const uploader = new FineUploaderTraditional({
//    options: {
//       request: {
//          endpoint: 'my/upload/endpoint'
//       }
//    }
// })

// const fileInput = (
//    <FileInput multiple accept='image/*' uploader={ uploader }>
//       <span class="icon ion-upload">Choose Files</span>
//    </FileInput>
// )

// export default ReactDOM.render(
//     fileInput,
//     document.getElementById('content')
// )
//upload file locally and keep track of path (i.e /upload/cocainebear.png)
//save this path/directory to mongo
//whenever it's called from frontend, get request(query) /upload/cocainebear.png
//in react <img src={mongo.filepath} />

// {/* <device type="media" onchange="update(this.data)"></device>
// <script>
//   function update(stream) {
//     document.querySelector('video').src = stream.url;
//   }
// </script> */}

// iOS6+ or Android 3.0+

// function hasGetUserMedia() {
//     return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
//   }
  
//   if (hasGetUserMedia()) {
//     alert('good to goooo')
//   } else {
//     alert('getUserMedia() is not supported by your browser');
//   }