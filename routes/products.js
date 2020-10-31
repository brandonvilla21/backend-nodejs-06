const express = require('express')
const router = express.Router()
const { getAllProducts, createProduct, updateProduct, deleteProduct, getReviewsFromProduct } = require('../controllers/products')
const permissions = require('../middlewares/permissions')

// Modificar las rutas para que se vean de la siguiente manera
// router.get('/', permissions('admin', 'customer') ,getAllProducts) // Agregar middleware para perimitir a usuarios admin y customer
// router.post('/', permissions('admin'), createProduct) // Agregar middleware para perimitir a usuarios admin unicamente

// api/products
router.get('/', getAllProducts) // Agregar middleware para perimitir a usuarios admin y customer
router.post('/', createProduct) // Agregar middleware para perimitir a usuarios admin unicamente
router.get('/:id/reviews', getReviewsFromProduct)
router.put('/:id', permissions('admin', 'customers'), updateProduct)
router.delete('/:id', permissions('admin'), deleteProduct)

module.exports = router
