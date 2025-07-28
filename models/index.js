// models/index.js
const sequelize = require('../config/db.config');
const defineUser     = require('./user.model');
const defineBootcamp = require('./bootcamp.model');

const User     = defineUser(sequelize);
const Bootcamp = defineBootcamp(sequelize);

// Asociación N:N
User.belongsToMany(Bootcamp, {
  through: 'user_bootcamp',
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Bootcamp.belongsToMany(User, {
  through: 'user_bootcamp',
  foreignKey: 'bootcamp_id',
  onDelete: 'CASCADE'
});

module.exports = { sequelize, User, Bootcamp };