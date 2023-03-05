const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetDepartamentos} = require('../controllers/departamentos.controller');

router.get('/', ctrGetDepartamentos);//TODO: Creamos la ruta de tipo get para listar todos los usuarios


module.exports = router;//TODO: Exportamos las rutas que hemos creados