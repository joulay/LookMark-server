'use strict';

const mongoose = require('mongoose');

const brideSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  phone: {type: String},
  email: {type: String},
  weddingDate: {type: String},
  location: {type:String},
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