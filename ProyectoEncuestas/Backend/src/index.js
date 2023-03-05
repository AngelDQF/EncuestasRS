const express = require('express');//TODO: importamos express para poder crear el servidor
const cors = require('cors');//TODO: importamos cors para poder hacer peticiones desde el frontend
const bodyParser = require('body-parser');//TODO: importamos body-parser para poder entender los datos que nos envian desde el frontend
const app = express();//TODO: Ejecutamos el servidor de express
require("dotenv").config();//TODO: importamos dotenv para poder usar las variables de entorno
const port = process.env.PORT || 3000; //TODO: definimos el puerto en el que va a correr el servidor
app.use(bodyParser.urlencoded({ extended: true }));////TODO: esta funcion sirve para que la app pueda entender los datos que le enviassmos en formato urlencoded(es decir, datos de formularios html)
app.use(bodyParser.json());//TODO: esta funcion sirve para que la app pueda entender los datos que le enviamos en formato json
app.use(cors());//TODO: Hacemos uso de cors para que la app pueda recibir peticiones de cualquier origen
app.use('/redsolidaria', require('./routes/index.route'));//TODO: Aquí definimos que se usen las rutas para los usuarios

app.listen(port);//TODO: Iniciamos el servidor en el puerto que definimos
console.log("Iniciado en el puerto",port);//TODO: Imprimimos en consola que el servidor se inició correctamente