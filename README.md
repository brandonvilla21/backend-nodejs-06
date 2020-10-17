## Requisitos para correr los ejercicios:
- MariaDB
  - MacOS: https://mariadb.com/resources/blog/installing-mariadb-10-1-16-on-mac-os-x-with-homebrew/
  - Windows: https://mariadb.org/download/
- Nodemon
  - `npm i -g nodemon`
- Sequelize
  - `npm i -g sequelize`
- Postman https://www.postman.com/downloads/
  - Aqui un video de como usar Postman https://www.youtube.com/watch?v=qsejysrhJiU
 
## Antes de ejecutar los ejercicios:
Asegurate de crear la base de datos que se utilizará en los ejercicios, si no quieres camibiar el nombre que viene por default en el codigo, haz lo siguiente:
```sh
# Para iniciar el servicio ejecuta el siguiente comando en la terminal
mysql.server start

# Abre MariaDB y crea la base de datos
mysql

CREATE DATABASE ecommerce_api;
```
## Pasos para descargar el proyecto

En tu consola corre el siguiente comando para clonar el proyecto a tu maquina
```sh
git clone https://github.com/brandonvilla21/backend-nodejs-06.git
```

Entra a la carpeta que se generó:
```sh
cd backend-nodejs-06
```

Instala las dependencias
```sh
npm install
```

## Pasos para correr el proyecto
Deberás tener instalado NodeJS en tu computadora. Puedes descargarlo [aquí](https://nodejs.org/en/)

Corre las migraciones para que sean creadas las tablas en tu base de datos local (Esto solo deberá hacerse la primera vez y cada que exista un cambio en la carpeta de `migrations`):
```sh
npm run run-migration
```

Para poder ejecutar el proyecto, basta con que corras el siguiente script estando en la raiz del proyecto

```sh
npm start
```

## Realiza pruebas desde Postman
Dentro de postamn asegurate de enviar el encabezado (Header) de `Content-type: application/json`

Estos con algunos ejemplos de como deberias enviar la información para algunos endpoints:

#### POST api/products
```javascript
{
    "name": "Computer HP i5, 1TB",
    "description": "Computadora con caracteristicas muy buenas...",
    "price": 8000.00,
    "image": "path/hp-image.jpg"
}
```
