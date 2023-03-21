const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetTiposOrganizaciones,ctrGetTiposOrgDes,ctrGetOrganizaciones,ctrGetOrganizacionesDesactivadas} = require('../controllers/organizaciones.controller');
const {authMiddleware}=require("../middleware/session")
const { checkTipo } = require("../middleware/role");
router.get('/',authMiddleware,checkTipo(["Admin"]),  ctrGetOrganizaciones);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.get('/desactivados',authMiddleware,checkTipo(["Admin"]),  ctrGetOrganizacionesDesactivadas);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.get('/tipos', authMiddleware,checkTipo(["Admin"]), ctrGetTiposOrganizaciones);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.get('/tipos/desactivados', authMiddleware,checkTipo(["Admin"]), ctrGetTiposOrgDes);//TODO: Creamos la ruta de tipo get para listar todos los Cargos Desactivados

module.exports = router;//TODO: Exportamos las rutas que hemos creados
