const express = require('express')
const router = express.Router()
const { getAllProducts, createProduct, updateProduct, deleteProduct, getReviewsFromProduct } = require('../controllers/products')

// api/products
router.get('/', getAllProducts)
router.post('/', createProduct)
router.get('/:id/reviews', getReviewsFromProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router
