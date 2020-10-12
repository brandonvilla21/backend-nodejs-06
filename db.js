const { Sequelize } = require('sequelize')

const products = require('./models/products')
const reviews = require('./models/reviews')
const users = require('./models/users')

const sequelize = new Sequelize('ecommerce_api', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: console.log
})

const models = [
  products,
  reviews,
  users,
]

for (const model of models) {
  model(sequelize)
}

// Configurar las relaciones
const { products: modelProduct, reviews: modelReview, users: modelUser } = sequelize.models

// Creando relacion uno a muchos (product-reviews)
modelProduct.hasMany(modelReview)
modelReview.belongsTo(modelProduct)

// Creando relacion uno a muchos (user-products)
modelUser.hasMany(modelProduct)
modelProduct.belongsTo(modelUser)

module.exports = sequelize