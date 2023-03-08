const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetBosques,ctrGetBosquesDesactivados,ctrGetSuelos,ctrGetSuelosDesactivados } = require('../controllers/naturales.controller');//TODO: Importamos las funciones del controlador

router.get('/bosques', ctrGetBosques);//TODO: Creamos la ruta de tipo get para listar todos los Bosques
router.get('/bosques/desactivados', ctrGetBosquesDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Bosques Desactivados
router.get('/suelos', ctrGetSuelos);//TODO: Creamos la ruta de tipo get para listar todos los Bosques
router.get('/suelos/desactivados', ctrGetSuelosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Bosques Desactivados
module.exports = router;//TODO: Exportamos las rutas que hemos creados