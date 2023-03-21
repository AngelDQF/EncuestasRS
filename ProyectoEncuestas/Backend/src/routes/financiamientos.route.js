const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetTiposFinanciamientos, ctrGetTiposFinanciamientosDesactivados, ctrGetFuentesFinanciamientos, ctrGetFuentesFinanciamientosDesactivados } = require('../controllers/financiamientos.controller');//TODO: Importamos las funciones del controlador
const { authMiddleware } = require("../middleware/session")
const { checkTipo } = require("../middleware/role");
router.get('/tipos', authMiddleware, checkTipo(["Admin"]), ctrGetTiposFinanciamientos);//TODO: Creamos la ruta de tipo get para listar todos los Tipos de Financiamientos
router.get('/tipos/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetTiposFinanciamientosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Tipos de Financiamientos Desactivados
router.get('/fuentes', authMiddleware, checkTipo(["Admin"]), ctrGetFuentesFinanciamientos);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos
router.get('/fuentes/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetFuentesFinanciamientosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos Desactivados
module.exports = router;//TODO: Exportamos las rutas que hemos creados