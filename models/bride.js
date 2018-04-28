'use strict';

const mongoose = require('mongoose');

const brideSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  phone: {type: String},
  email: {type: String},
  weddingDate: {type: String},
  location: {type:String},
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


//retrieve all created bride
//populate initial state with brides
//if user doesn't have bride, array would be empty
//initial state: if user has bride, if user doesn't have bride

//this.props.bride = [], return client-form
//if this.length.bride !=0 return list of bride. clickable brides (react strict router)

//reply on component to decide what it needs to render
//component to display the form
//to trigger a rerender, life cycle METHODS