const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

module.exports = (sequelize) => {
  const User = sequelize.define('users', {
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
        const salt = bcrypt.genSaltSync() // numero de rondas que procesa el hash
        user.password = bcrypt.hashSync(user.password, salt)
      },
      beforeUpdate: (user, options) => {
        user.updatedAt = new Date()
      }
    }
  })

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password)
  }

  return User
}