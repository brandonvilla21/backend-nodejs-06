const express = require('express');
const router = express.Router();
const { getAllReviews, createReview, updateReview, deleteReview } = require('../controllers/reviews')

// api/users
router.get('/', getAllReviews);
router.post('/', createReview);
router.put('/:id', updateReview);
router.delete('/:id', deleteReview);

module.exports = router;