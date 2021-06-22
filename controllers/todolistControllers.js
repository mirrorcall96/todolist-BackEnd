const { types } = require("pg");
const { ToDoList } = require("../db/models");

exports.todolistAll = async (req, res, next) => {
  try {
    const todolists = await ToDoList.findAll();
    res.json(todolists);
  } catch (error) {
    next(error);
  }
};

exports.todolistFetch = async (todoID) => {
  const myTodolist = ToDoList.findByPk(todoID);
  return myTodolist;
};

exports.todolistDelete = async (req, res, next) => {
  try {
    await req.myTodolist.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
exports.todolistCreate = async (req, res, next) => {
  try {
    const newTodolist = await ToDoList.create(req.body);
    res.status(201).json(newTodolist);
  } catch (error) {
    next(error);
  }
};
exports.todolistUpdate = async (req, res, next) => {
  try {
    await req.myTodolist.update(req.body);
    res.status(201).json(req.myTodolist);
  } catch (error) {
    next(error);
  }
};
