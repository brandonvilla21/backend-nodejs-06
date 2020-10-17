const sequelize = require('../db')
const { models } = sequelize

async function getAllOrders(request, response) {
  try {
    const orders = await models.orders.findAll()
    response.status(200).json({ data: orders })
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

async function createOrder(request, response) {
  try {
    const order = await models.orders.create(request.body)
    response.status(201).json({ data: order })
  } catch(error) {
    response.sendStatus(500)
    throw error
  }
}

async function updateOrder(request, response) {
  try {
    const { id } = request.params;
    const order = await models.orders.findByPk(id);
    if (!order) {
      return response.status(404).json({ code: 404, message: 'Order not found' });
    }
    const updatedOrder = await order.update(request.body);
    return response.json({ data: updatedOrder });
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

async function deleteOrder(request, response) {
  try {
    const { id } = request.params;
    const order = await models.orders.findByPk(id);
    if (!order) {
      return response.status(404).json({ code: 404, message: 'Order not found' });
    }
    await order.destroy();
    return response.sendStatus(200);
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

async function getFullOrder(request, response) {
  try {
    const { id } = request.params
    const orders = await models.orders.findByPk(id, { include: [models.products, models.users] });
    delete orders.dataValues.user.dataValues.password
    
    return response.status(200).json({ data: orders });
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

module.exports = {
  getAllOrders,
  createOrder,
  updateOrder,
  deleteOrder,
  getFullOrder,
}