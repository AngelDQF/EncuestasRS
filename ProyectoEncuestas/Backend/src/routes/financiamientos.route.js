const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetTiposFinanciamientos, ctrGetTiposFinanciamientosDesactivados,ctrGetFuentesFinanciamientos, ctrGetFuentesFinanciamientosDesactivados} = require('../controllers/financiamientos.controller');//TODO: Importamos las funciones del controlador

router.get('/tipos', ctrGetTiposFinanciamientos);//TODO: Creamos la ruta de tipo get para listar todos los Tipos de Financiamientos
router.get('/tipos/desactivados', ctrGetTiposFinanciamientosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Tipos de Financiamientos Desactivados
router.get('/fuentes', ctrGetFuentesFinanciamientos);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos
router.get('/fuentes/desactivados', ctrGetFuentesFinanciamientosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos Desactivados
module.exports = router;//TODO: Exportamos las rutas que hemos creados