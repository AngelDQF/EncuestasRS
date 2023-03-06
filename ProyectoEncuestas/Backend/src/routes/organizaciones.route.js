const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetTiposOrganizaciones,ctrGetTiposOrgDes } = require('../controllers/organizaciones.controller');

router.get('/tipos', ctrGetTiposOrganizaciones);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.get('/tipos/desactivados', ctrGetTiposOrgDes);//TODO: Creamos la ruta de tipo get para listar todos los Cargos Desactivados

module.exports = router;//TODO: Exportamos las rutas que hemos creados
