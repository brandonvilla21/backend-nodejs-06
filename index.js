const express = require('express')
const app = express();
const routes = require('./routes')

// Sustituto de body-parser: sirve para manejar JSONs en los peticiones
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/healthcheck', (request,response)=>{
  response.status(200).json({ message: "API is running", status: "ok"})
})

app.use('/api', routes)

app.listen(3000, ()=> console.log("listening port 3000"))