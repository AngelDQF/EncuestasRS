const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetCargos,ctrGetCargosDesactivados } = require('../controllers/cargos.controller');

router.get('/', ctrGetCargos);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.get('/desactivados', ctrGetCargosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Cargos Desactivados

module.exports = router;//TODO: Exportamos las rutas que hemos creados