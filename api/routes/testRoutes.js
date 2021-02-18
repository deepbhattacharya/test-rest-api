'use strict';

module.exports = function(app) {
  var testapi = require('../controllers/testController');

  // Routes
  app.route('/tasks')
    .get(testapi.list_all_tasks)
    .post(testapi.create_a_task);

  app.route('/tasks/:taskId')
    .get(testapi.read_a_task)
    .put(testapi.update_a_task)
    .delete(testapi.delete_a_task);
};
