'use strict';

const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    photo: { data: Buffer, contentType: String }
});

photoSchema.set('toObject', {
    transform: function (doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    }
  });
  
  module.exports = mongoose.model('Photo', photoSchema);