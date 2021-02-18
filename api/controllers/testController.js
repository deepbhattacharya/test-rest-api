'use strict';

var mongoose = require('mongoose'),
RawData = mongoose.model('RawData');

exports.list_all_data = function(req, res) {
  RawData.find({}, function(err, raw_data) {
    if (err)
      res.send(err);
    res.json(raw_data);
  });
};

exports.save_a_datum = function(req, res) {
    var new_datum = new RawData();
    new_datum.data = req.body.toString();
    new_datum.save(function(err, raw_data) {
      if (err)
        res.send(err);
      res.json(raw_data);
    });
  };

exports.read_a_datum = function(req, res) {
  RawData.findById(req.params.datumId, function(err, raw_data) {
      if (err)
        res.send(err);
      res.json(raw_data);
    });
  };

exports.update_a_datum = function(req, res) {
  RawData.findOneAndUpdate({_id: req.params.datumId}, req.body, {new: true}, function(err, raw_data) {
      if (err)
        res.send(err);
      res.json(raw_data);
    });
  };

exports.delete_a_datum = function(req, res) {
  RawData.remove({
      _id: req.params.datumId
    }, function(err, raw_data) {
      if (err)
        res.send(err);
      res.json({ message: 'datum successfully deleted' });
    });
  };