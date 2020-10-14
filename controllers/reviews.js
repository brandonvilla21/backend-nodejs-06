const sequelize = require('../db');
const { models } = sequelize

async function getAllReviews(request, response) {
  try {
    const reviews = await models.reviews.findAll();
    return response.status(200).json({ data: reviews });
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

async function createReview(request, response) {
  try {
    const review = await models.reviews.create(request.body);
    return response.status(201).json({ data: review })
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}
async function updateReview(request, response) {
  try {
    const { id } = request.params;
    const review = await models.reviews.findByPk(id);
    if (!review) {
      return response.status(404).json({ code: 404, message: 'Review not found' });
    }
    const updatedReview = await review.update(request.body);
    return response.json({ data: updatedReview });
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

async function deleteReview(request, response) {
  try {
    const { id } = request.params;
    const review = await models.reviews.findByPk(id);
    if (!review) {
      return response.status(404).json({ code: 404, message: 'Review not found' });
    }
    await review.destroy();
    return response.sendStatus(200);
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}


module.exports = {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
}