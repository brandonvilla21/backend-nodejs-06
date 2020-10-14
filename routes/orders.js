const express = require('express')
const router = express.Router()
const { getAllOrders, createOrder, updateOrder, deleteOrder, getFullOrder } = require('../controllers/orders')

// api/orders
router.get('/', getAllOrders)
router.get('/:id/fullOrder', getFullOrder)
router.post('/', createOrder)
router.put('/:id', updateOrder)
router.delete('/:id', deleteOrder)

module.exports = router
