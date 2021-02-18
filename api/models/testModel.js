'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RawDataSchema = new Schema({
  created_timestamp: {
    type: Date,
    default: Date.now
  },
  data: {
    type: String,
    default: 'no data received'
  }
});

module.exports = mongoose.model('RawData', RawDataSchema);
