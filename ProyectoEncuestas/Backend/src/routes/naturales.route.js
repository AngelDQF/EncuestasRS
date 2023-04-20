const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetBosques, ctrGetBosquesDesactivados, ctrGetSuelos, ctrGetSuelosDesactivados } = require('../controllers/naturales.controller');//TODO: Importamos las funciones del controlador
const { authMiddleware } = require("../middleware/session")
const { checkTipo } = require("../middleware/role");
router.get('/bosques', ctrGetBosques,checkTipo(["Admin","Encuestador"]));//TODO: Creamos la ruta de tipo get para listar todos los Bosques
router.get('/bosques/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetBosquesDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Bosques Desactivados
router.get('/suelos', authMiddleware, checkTipo(["Admin","Encuestador"]), ctrGetSuelos);//TODO: Creamos la ruta de tipo get para listar todos los Bosques
router.get('/suelos/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetSuelosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Bosques Desactivados
module.exports = router;//TODO: Exportamos las rutas que hemos creados