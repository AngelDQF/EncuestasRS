const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const {ctrGetDepartamentos ,ctrGetMunicipios,ctrGetAldeas,ctrGetCaserios}= require('../controllers/ubicaciones.controller');//TODO: Importamos las funciones del controlador

router.get('/departamentos', ctrGetDepartamentos);//TODO: Creamos la ruta de tipo get para listar todos Departamentos
router.get('/municipios', ctrGetMunicipios);//TODO: Creamos la ruta de tipo get para listar todos los Municipios
router.get('/aldeas', ctrGetAldeas);//TODO: Creamos la ruta de tipo get para listar todas las Aldeas
router.get('/caserios', ctrGetCaserios);//TODO: Creamos la ruta de tipo get para listar todos los Caserios


module.exports = router;//TODO: Exportamos las rutas que hemos creados