const jwt = require('jsonwebtoken')
const sequelize = require('../db')
const { models } = sequelize

function authenticate(request, response, next) {
  const { authorization } = request.headers
  jwt.verify(authorization, 'mysupersecretkey', async (error, decoded) => {
    if (error) {
      console.log(error)
      return response.status(401).json({ message: 'Unauthorized' })
    }
    request.user = await models.users.findByPk(decoded.userId)
    next()
  })
}

module.exports = authenticate