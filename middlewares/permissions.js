// Obtener la info traves de request.user.userRole
function permissions(...allowedRoles) {
  return (request, response, next) => {
    // Agregar la logica para validar el rol
    const userRole = request.user.userRole
    if (!allowedRoles.includes(userRole)) {
      return response.status(401).json({ message: 'Unauthorized' })
    }
    next()
  }
}

// exportar funcion
module.exports = permissions