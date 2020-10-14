const express = require('express')
const router = express.Router()
const { getAllUsers, createUser, updateUser, deleteUser, getProductsFromUser } = require('../controllers/users')

// api/users
router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:id/products', getProductsFromUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router
