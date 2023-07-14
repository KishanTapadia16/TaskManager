const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTasks,
  updateTasks,
  deleteTask,
  getTask,
} = require("../controllers/tasks");
router.route("/").get(getAllTasks).post(createTasks);
router.route("/:id").get(getTask).patch(updateTasks).delete(deleteTask);
module.exports = router;
