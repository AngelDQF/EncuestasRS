const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetBosques, ctrGetBosquesDesactivados, ctrGetSuelos, ctrGetSuelosDesactivados, ctrGetBosqueById, ctrPostBosque, ctrPutBosque, ctrPutBosqueEstado, ctrGetSueloById, ctrPostSuelo, ctrPutSuelo, ctrPutSueloEstado } = require('../controllers/naturales.controller');//TODO: Importamos las funciones del controlador
const { authMiddleware } = require("../middleware/session")
const { checkTipo } = require("../middleware/role");

//Bosques
router.get('/bosques', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetBosques);//TODO: Creamos la ruta de tipo get para listar todos los Bosques
router.get('/bosques/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetBosquesDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Bosques Desactivados
router.post('/bosques', authMiddleware, checkTipo(["Admin"]), ctrGetBosqueById);
router.post('/bosques/crear', authMiddleware, checkTipo(["Admin"]), ctrPostBosque);
router.put('/bosques/editar', authMiddleware, checkTipo(["Admin"]), ctrPutBosque);
router.put('/bosques/editar/estado', authMiddleware, checkTipo(["Admin"]), ctrPutBosqueEstado);
//Suelos
router.get('/suelos', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetSuelos);//TODO: Creamos la ruta de tipo get para listar todos los Bosques
router.get('/suelos/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetSuelosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Bosques Desactivados
router.post('/suelos', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetSueloById);
router.post('/suelos/crear', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostSuelo);
router.put('/suelos/editar', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPutSuelo);
router.put('/suelos/editar/estado', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPutSueloEstado);
module.exports = router;//TODO: Exportamos las rutas que hemos creados