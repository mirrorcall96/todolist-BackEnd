const express = require("express");
const {
  todolistAll,
  todolistFetch,
  todolistDelete,
  todolistCreate,
  todolistUpdate,
} = require("../controllers/todolistControllers");

const router = express.Router();
router.param("todoID", async (req, res, next, todoID) => {
  const myTodolist = await todolistFetch(todoID);
  if (!myTodolist) next({ status: 404, message: "Id not found" });
  req.myTodolist = myTodolist;
  next();
});

router.get("/", todolistAll);
router.delete("/:todoID", todolistDelete);
router.post("/", todolistCreate);
router.post("/:todoID", todolistUpdate);

module.exports = router;
