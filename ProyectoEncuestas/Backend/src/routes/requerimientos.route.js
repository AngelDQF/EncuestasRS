const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetMercados, ctrGetMercadosDesactivados, ctrGetUsosTierra, ctrGetUsosTierraDesactivados, ctrGetEstructuras, ctrGetEstructurasDesactivados, ctrGetTenenciaTierra, ctrGetTenenciaTierraDesactivados} = require('../controllers/requerimientos.controller');//TODO: Importamos las funciones del controlador

router.get('/mercados', ctrGetMercados);//TODO: Creamos la ruta de tipo get para listar todos los Tipos de Financiamientos
router.get('/mercados/desactivados', ctrGetMercadosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Tipos de Financiamientos Desactivados
router.get('/tierras/usos', ctrGetUsosTierra);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos
router.get('/tierras/usos/desactivados', ctrGetUsosTierraDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos Desactivados
router.get('/estructuras', ctrGetEstructuras);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos
router.get('/estructuras/desactivados', ctrGetEstructurasDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos Desactivados
router.get('/tierras/tenencia', ctrGetTenenciaTierra);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos
router.get('/tierras/tenencia/desactivados', ctrGetTenenciaTierraDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Fuentes de Financiamientos Desactivados

module.exports = router;//TODO: Exportamos las rutas que hemos creados