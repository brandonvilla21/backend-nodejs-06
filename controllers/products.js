const sequelize = require('../db')
const { models } = sequelize

async function getAllProducts(request, response) {
  try {
    const products = await models.products.findAll()
    response.status(200).json({ data: products })
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

async function createProduct(request, response) {
  try {
    const product = await models.products.create(request.body)
    response.status(201).json({ data: product })
  } catch(error) {
    response.sendStatus(500)
    throw error
  }
}

async function updateProduct(request, response) {
  try {
    const { id } = request.params;
    const product = await models.products.findByPk(id);
    if (!product) {
      return response.status(404).json({ code: 404, message: 'Product not found' });
    }
    const updatedProduct = await product.update(request.body);
    return response.json({ data: updatedProduct });
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}
async function deleteProduct(request, response) {
  try {
    const { id } = request.params;
    const product = await models.products.findByPk(id);
    if (!product) {
      return response.status(404).json({ code: 404, message: 'Product not found' });
    }
    await product.destroy();
    return response.sendStatus(200);
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

async function getReviewsFromProduct(request, response) {
  try {
    const { id } = request.params
    const products = await models.products.findByPk(id, { include: [models.reviews] });
    return response.status(200).json({ data: products });
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getReviewsFromProduct,
}