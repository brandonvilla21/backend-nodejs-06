const sequelize = require('../db')
const { models } = sequelize

async function getAllUsers(request, response) {
  try {
    const users = await models.users.findAll()
    response.status(200).json({ data: users })
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

async function createUser(request, response) {
  try {
    const user = await models.users.create(request.body)
    response.status(201).json({ data: user })
  } catch(error) {
    response.sendStatus(500)
    throw error
  }
}

async function updateUser(request, response) {
  try {
    const { id } = request.params;
    const user = await models.users.findByPk(id);
    if (!user) {
      return response.status(404).json({ code: 404, message: 'User not found' });
    }
    const updatedUser = await user.update(request.body);
    return response.json({ data: updatedUser });
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}
async function deleteUser(request, response) {
  try {
    const { id } = request.params;
    const user = await models.users.findByPk(id);
    if (!user) {
      return response.status(404).json({ code: 404, message: 'User not found' });
    }
    await user.destroy();
    return response.sendStatus(200);
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

async function getProductsFromUser(request, response) {
  try {
    const { id } = request.params
    const users = await models.users.findByPk(id, { include: [models.products] });
    return response.status(200).json({ data: users });
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getProductsFromUser,
}