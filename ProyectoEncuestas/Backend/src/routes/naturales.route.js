const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetBosques,ctrGetBosquesDesactivados } = require('../controllers/naturales.controller');

router.get('/bosques', ctrGetBosques);//TODO: Creamos la ruta de tipo get para listar todos los Bosques
router.get('/bosques/desactivados', ctrGetBosquesDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Bosques Desactivados

module.exports = router;//TODO: Exportamos las rutas que hemos creados