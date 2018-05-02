'use strict';

const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    photo: { type: String, default: '' },
    brideId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bride', required: true }
});
  
module.exports = mongoose.model('Photo', photoSchema);