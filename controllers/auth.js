const sequelize = require('../db')
const { models } = sequelize
const jwt = require('jsonwebtoken')

async function login(request, response) {
  try {
    // Esperar por una contrase;a y username
    const { body } = request
    // Buscar al usuario en la BD
    const user = await models.users.findOne({ where: { username: body.username } })
    // Si no lo encuentra, devolver un 404 (No lo encontro)
    if (!user) {
      return response.status(401).json({ message: 'Unauthorized' })
    }

    // Validar que la contrase;a coincide
    if (!user.validPassword(body.password)) {
      // Si no conicide la contrase;a 401 Invalid credentials
      return response.status(401).json({ message: 'Invalid credentials' })
    }

    // Generar el token y devolverlo en la respuesta (jsonwebtoken)
    const token = jwt.sign({ userId: user.id }, 'mysupersecretkey', {
      expiresIn: 36000
    })
    // Devolver un objeto con la siguiente informacion: { message: 'Authenticated successfully!', token: '' }
    return response.status(200).json({ message: 'Authenticated successfully', token })
  } catch (error) {
    response.sendStatus(500)
    throw error
  }
}

/**
 Pasos para el Signup
- Validarás que el usuario no exista dentro de tu base de datos, en caso de ser verdadero, continuarás con el proceso.
  - En caso contrario, deberás arrojar un mensaje de error con un estado HTTP 400, indicando que ese username ya ha sido registrado.
- Los usuarios registrados desde aquí serán solo de tipo: cliente. Ej. type: 'customer'.
- Si todo salio bien, devolver un JSON con una propiedad message que diga: User registered successfully!
- Al final verifica que puedes registrar usuario a traves de este endpoint

*/

async function signup(request, response) {
  try{
    const { body } = request // request.body

    const username = await models.users.findOne({where:{username : body.username} })

    if(username)
    {
        return response.status(400).json({message: 'username already registered'})
    } 
    const user = await models.users.create({
      name: body.name,
      username: body.username,
      password: body.password,
      userRole: "customer"
    });
      return response.status(200).json({
        message: 'User created successfully'
      });
  } catch(error){
    response.sendStatus(500)
    throw error
  }
}

module.exports = {
  login,
  signup,
}