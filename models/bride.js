'use strict';

const mongoose = require('mongoose');
const photoSchema = require('./photo');

const brideSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  phone: {type: String},
  email: {type: String},
  weddingDate: {type: String},
  location: {type:String},
  notes: {type:String},
  photo: {uploadStatus: false},
  created: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  
});

brideSchema.set('toObject', {
  transform: function (doc, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  }
});

module.exports = mongoose.model('Bride', brideSchema);

//initial get request, when displaying client detail, need 2 models: bride 
//with each bride ID, search photo model 

//create 2 promise and execute promise.all
//serve on client side two packages: bride model and photo model

//user ability to edit photo 