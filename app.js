const express = require("express");
const db = require("./db/models");
const cors = require("cors");

const todolistRouters = require("./routers/todolistRouters");
app = express();
app.use(cors());
db.sequelize.sync({ force: true });

app.use(express.json());
app.use("/todolist", todolistRouters);

app.use((req, res, next) =>
  res.status(404).json({ message: "Path not Found" })
);
app.use((err, req, res, next) =>
  res
    .status(err.status ?? 500)
    .json({ message: err.message ?? "Internal Server Error" })
);
app.listen(8000);
