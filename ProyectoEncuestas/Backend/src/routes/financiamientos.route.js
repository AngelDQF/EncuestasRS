const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetTiposFinanciamientos, ctrGetTiposFinanciamientosDesactivados} = require('../controllers/financiamientos.controller');//TODO: Importamos las funciones del controlador

router.get('/tipos', ctrGetTiposFinanciamientos);//TODO: Creamos la ruta de tipo get para listar todos los Bosques
router.get('/tipos/desactivados', ctrGetTiposFinanciamientosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Bosques Desactivados

module.exports = router;//TODO: Exportamos las rutas que hemos creados