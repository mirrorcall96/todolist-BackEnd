module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "ToDoList",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.BOOLEAN, allowNull: false },
      priority: { type: DataTypes.STRING, allowNull: false },
      deadline: { type: DataTypes.DATE, allowNull: false },
    },
    { createdAt: false, updatedAt: false }
  );
};
