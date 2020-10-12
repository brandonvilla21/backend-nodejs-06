const { DataTypes } = require('sequelize')

module.exports = (sequelize) => sequelize.define('users', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  username: DataTypes.STRING,
  password: DataTypes.STRING,
  userRole: DataTypes.STRING, // admin or customer
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  hooks: {
    beforeCreate: (user, options) => {
      user.createdAt = new Date()
      user.updatedAt = new Date()
    },
    beforeUpdate: (user, options) => {
      user.updatedAt = new Date()
    }
  }
})