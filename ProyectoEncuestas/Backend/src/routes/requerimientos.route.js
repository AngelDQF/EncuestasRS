const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetMercados, ctrGetMercadosDesactivados, ctrGetUsosTierra, ctrGetUsosTierraDesactivados, ctrGetEstructuras, ctrGetEstructurasDesactivados, ctrGetTenenciaTierra, ctrGetTenenciaTierraDesactivados} = require('../controllers/requerimientos.controller');//TODO: Importamos las funciones del controlador
const {authMiddleware}=require("../middleware/session")
const { checkTipo } = require("../middleware/role");
router.get('/mercados', authMiddleware,checkTipo(["Admin","Encuestador"]), ctrGetMercados);//TODO: Creamos la ruta de tipo get para listar todos los Tipos de Financiamientos
router.get('/mercados/desactivados', authMiddleware,checkTipo(["Admin"]), ctrGetMercadosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Tipos de Financiamientos Desactivados
router.get('/tierras/usos',authMiddleware,checkTipo(["Admin","Encuestador"]),  ctrGetUsosTierra);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos
router.get('/tierras/usos/desactivados',authMiddleware,checkTipo(["Admin"]),  ctrGetUsosTierraDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos Desactivados
router.get('/estructuras', authMiddleware,checkTipo(["Admin","Encuestador"]), ctrGetEstructuras);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos
router.get('/estructuras/desactivados', authMiddleware,checkTipo(["Admin"]), ctrGetEstructurasDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos Desactivados
router.get('/tierras/tenencia',authMiddleware,checkTipo(["Admin","Encuestador"]),  ctrGetTenenciaTierra);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos
router.get('/tierras/tenencia/desactivados',authMiddleware,checkTipo(["Admin"]),  ctrGetTenenciaTierraDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos Desactivados

module.exports = router;//TODO: Exportamos las rutas que hemos creados