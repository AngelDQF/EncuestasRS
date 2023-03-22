const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const {ctrGetEncuestas,ctrGetDepartamentosUsuario, ctrGetMunicipiosUsuario,ctrGetOrganizacion,ctrGetOrganizacionesSociales,ctrGetSuelos, ctrGetAldeasUsuario, ctrGetCaseriosUsuario }=require('../controllers/encuestas.controller')
const {authMiddleware}=require("../middleware/session")
const { checkTipo } = require("../middleware/role");
router.get('/listar',authMiddleware,checkTipo(["Admin"]),ctrGetEncuestas);//Creamos ruta para listar las aldeas
router.post('/departamentos',authMiddleware,checkTipo(["Admin","Encuestador"]),ctrGetDepartamentosUsuario);//Creamos ruta para listar los departamentos del usuario
router.get('/org',authMiddleware,checkTipo(["Admin","Encuestador"]),ctrGetOrganizacion);//Creamos ruta para listar las organizaciones que realizan la reunion
router.get('/sociales',authMiddleware,checkTipo(["Admin","Encuestador"]),ctrGetOrganizacionesSociales);//Creamos ruta para listar las organizaciones sociales productivas
router.get('/suelos',authMiddleware,checkTipo(["Admin","Encuestador"]),ctrGetSuelos);//Creamos ruta para listar las aldeas
router.post('/municipios',authMiddleware,checkTipo(["Admin","Encuestador"]),ctrGetMunicipiosUsuario);//Creamos ruta para listar los municipios asignados al usuario
router.post('/aldeas',authMiddleware,checkTipo(["Admin","Encuestador"]),ctrGetAldeasUsuario);//Creamos ruta para listar las aldeas asignados al usuario
router.post('/caserios',authMiddleware,checkTipo(["Admin","Encuestador"]),ctrGetCaseriosUsuario);//Creamos ruta para listar los caserios asignados al usuario

module.exports=router;