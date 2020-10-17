const express = require('express')
const router = express.Router()
const products = require('./products')
const reviews = require('./reviews')
const users = require('./users')
const orders = require('./orders')
const auth = require('./auth')
const authenticate = require('../middlewares/authentication')

router.use('/products', authenticate, products)
router.use('/reviews', authenticate,  reviews)
router.use('/users', authenticate, users)
router.use('/orders', authenticate, orders)
router.use('/auth', auth )

module.exports = router