const express = require('express')
const router = express.Router()
const products = require('./products')
const reviews = require('./reviews')
const users = require('./users')
const orders = require('./orders')

router.use('/products', products)
router.use('/reviews', reviews)
router.use('/users', users)
router.use('/orders', orders)

module.exports = router