const { DataTypes } = require('sequelize')

module.exports = (sequelize) => sequelize.define('products', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: DataTypes.STRING,
  description: DataTypes.TEXT,
  price: DataTypes.FLOAT,
  image: DataTypes.STRING,
  userId: {
    type: DataTypes.INTEGER,
    reference: {
      model: 'users',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  createdAt: DataTypes.DATE,
  updatedAt: DataTypes.DATE,
}, {
  hooks: {
    beforeCreate: (product, options) => {
      product.createdAt = new Date()
      product.updatedAt = new Date()
    },
    beforeUpdate: (product, options) => {
      product.updatedAt = new Date()
    }
  }
})