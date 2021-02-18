'use strict';

module.exports = function(app) {
  var testapi = require('../controllers/testController');

  // Routes
  app.route('/data')
    .get(testapi.list_all_data)
    .post(testapi.save_a_datum);

  app.route('/data/:datumId')
    .get(testapi.read_a_datum)
    .put(testapi.update_a_datum)
    .delete(testapi.delete_a_datum);
};
