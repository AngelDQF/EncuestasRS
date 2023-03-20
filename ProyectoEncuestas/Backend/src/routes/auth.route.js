const express = require("express");//TODO: Importamos express para poder usar el metodo Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { validatorLogin } = require('../validators/auth.validator.js')//TODO: Importamos los validadores de auth.js
const { ctrLogin } = require("../controllers/auth.controller");//TODO: Exportamos las funciones del controlador de Usuarios para las rutas

router.get('/login', validatorLogin, ctrLogin);//TODO: Creamos rutas para loguearnos

module.exports = router;//TODO: Exportamos las rutas que hemos creado