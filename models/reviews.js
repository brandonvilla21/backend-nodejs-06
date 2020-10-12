const { DataTypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('reviews', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    productId: {
        type: DataTypes.INTEGER,
        reference: {
          model: 'products',
          key: 'id'
        },
        onDelete: 'CASCADE'
    },
    content: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    hooks: {
        beforeCreate: (review, options) => {
            review.createdAt = new Date()
            review.updatedAt = new Date()
        },
        beforeUpdate: (review, options) => {
            review.updatedAt = new Date()
        }
    }
})