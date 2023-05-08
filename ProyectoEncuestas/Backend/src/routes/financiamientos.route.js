const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetTiposFinanciamientos, ctrGetTiposFinanciamientosDesactivados, ctrGetFuentesFinanciamientos, ctrGetFuentesFinanciamientosDesactivados, ctrGetTipoFinById, ctrPostTipoFin, ctrPutTipoFin, ctrPutTipoFinEstado, ctrGetFuenteFinById, ctrPostFuenteFin, ctrPutFuenteFin, ctrPutFuenteFinEstado } = require('../controllers/financiamientos.controller');//TODO: Importamos las funciones del controlador
const { authMiddleware } = require("../middleware/session")
const { checkTipo } = require("../middleware/role");
//Tipos
router.get('/tipos', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetTiposFinanciamientos);//TODO: Creamos la ruta de tipo get para listar todos los Tipos de Financiamientos
router.get('/tipos/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetTiposFinanciamientosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Tipos de Financiamientos Desactivados
router.post('/tipos', authMiddleware, checkTipo(["Admin"]), ctrGetTipoFinById);
router.post('/tipos/crear', authMiddleware, checkTipo(["Admin"]), ctrPostTipoFin);
router.put('/tipos/editar', authMiddleware, checkTipo(["Admin"]), ctrPutTipoFin);
router.put('/tipos/editar/estado', authMiddleware, checkTipo(["Admin"]), ctrPutTipoFinEstado);
//Fuentes
router.get('/fuentes', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetFuentesFinanciamientos);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos
router.get('/fuentes/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetFuentesFinanciamientosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos Desactivados
router.post('/fuentes', authMiddleware, checkTipo(["Admin"]), ctrGetFuenteFinById);
router.post('/fuentes/crear', authMiddleware, checkTipo(["Admin"]), ctrPostFuenteFin);
router.put('/fuentes/editar', authMiddleware, checkTipo(["Admin"]), ctrPutFuenteFin);
router.put('/fuentes/editar/estado', authMiddleware, checkTipo(["Admin"]), ctrPutFuenteFinEstado);

module.exports = router;//TODO: Exportamos las rutas que hemos creados