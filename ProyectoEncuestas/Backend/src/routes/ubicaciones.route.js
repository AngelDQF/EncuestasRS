const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const {ctrGetDepartamentos ,ctrGetMunicipios,ctrGetAldeas,ctrGetCaserios,ctrGetMunicipiosByDep,ctrGetUbicacionesSinAsignar}= require('../controllers/ubicaciones.controller');//TODO: Importamos las funciones del controlador
const {authMiddleware}=require("../middleware/session")
const { checkTipo } = require("../middleware/role");
router.get('/departamentos',authMiddleware,checkTipo(["Admin"]),  ctrGetDepartamentos);//TODO: Creamos la ruta de tipo get para listar todos Departamentos
router.post('/departamentos/mun',authMiddleware,checkTipo(["Admin"]), ctrGetMunicipiosByDep);
router.get('/municipios',authMiddleware,checkTipo(["Admin"]),  ctrGetMunicipios);//TODO: Creamos la ruta de tipo get para listar todos los Municipios
router.get('/aldeas', authMiddleware,checkTipo(["Admin"]), ctrGetAldeas);//TODO: Creamos la ruta de tipo get para listar todas las Aldeas
router.get('/caserios', authMiddleware,checkTipo(["Admin"]), ctrGetCaserios);//TODO: Creamos la ruta de tipo get para listar todos los Caserios
router.post('/asignar/mun',authMiddleware,checkTipo(["Admin"]), ctrGetUbicacionesSinAsignar);


module.exports = router;//TODO: Exportamos las rutas que hemos creadosss