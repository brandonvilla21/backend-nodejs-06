/**
  
  [X] Proteccion de aplicacion en general: Helmet y CORS
  [x] Proteccion de datos en especifico (contraseñas de usuarios): bcrypt
  [x] Proteccion para rutas en especifico: Middlewares

 */

const helmet = require('helmet')
const cors = require('cors')
const express = require('express')
const app = express();
const routes = require('./routes')

app.use(helmet())
app.use(cors())

// Sustituto de body-parser: sirve para manejar JSONs en los peticiones
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/healthcheck', (request,response)=>{
  response.status(200).json({ message: "API is running", status: "ok"})
})

app.use('/api', routes)

app.listen(3000, ()=> console.log("listening port 3000"))