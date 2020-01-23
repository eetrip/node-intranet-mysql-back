"use strict";
module.exports = function(app) {
  var task = require("../controller/appController");

  app.route("/").get(task.list_all_tasks);

  // add new task || by default lists all tasks.
  app
    .route("/tasks")
    .get(task.list_all_tasks)
    .post(task.create_a_task);

  // read, update or delete any particular task based on ID.
  app
    .route("/tasks/:taskId")
    .get(task.read_a_task)
    .put(task.update_a_task)
    .delete(task.delete_a_task);

  app.route("/*").get(task.error);
};
