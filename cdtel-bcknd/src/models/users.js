module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isCompany: DataTypes.BOOLEAN,
    admin: DataTypes.BOOLEAN
  });
  return User;
};
