const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { 
  ctrGetEncuestas, ctrGetDepartamentosUsuario, ctrGetMunicipiosUsuario, ctrGetOrganizacion, ctrGetOrganizacionesSociales, ctrGetSuelos, ctrGetAldeasUsuario, ctrGetCaseriosUsuario, ctrGetEstructurasEncuestas, ctrGetEstadosEncuestas, ctrGetTecnologicoEncuestas, ctrGetOrgLocales, ctrPostEncuesta, ctrPostGeoUbicacion, ctrPostJunta, ctrPostServBasico, ctrPostServLocal, ctrPostDetalleOrg, ctrPostDetalleImportacion, ctrPostDetalleExportacion, ctrPostDetalleUsoTierra, ctrGetJuntaByID, ctrPostDetalleFinanciamiento, ctrPostDetalleRequerimiento 
} = require('../controllers/encuestas.controller')
const { authMiddleware } = require("../middleware/session")
const { checkTipo } = require("../middleware/role");
router.get('/listar', authMiddleware, checkTipo(["Admin"]), ctrGetEncuestas);//Creamos ruta para listar las aldeas
router.post('/departamentos', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetDepartamentosUsuario);//Creamos ruta para listar los departamentos del usuario
router.get('/org', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetOrganizacion);//Creamos ruta para listar las organizaciones que realizan la reunion
router.get('/org/locales', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetOrgLocales);
router.get('/sociales', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetOrganizacionesSociales);//Creamos ruta para listar las organizaciones sociales productivas
router.get('/suelos', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetSuelos);//Creamos ruta para listar las aldeas
router.post('/municipios', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetMunicipiosUsuario);//Creamos ruta para listar los municipios asignados al usuario
router.post('/aldeas', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetAldeasUsuario);//Creamos ruta para listar las aldeas asignados al usuario
router.post('/caserios', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetCaseriosUsuario);//Creamos ruta para listar los caserios asignados al usuario
router.get('/estructuras', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetEstructurasEncuestas);//Creamos ruta para listar los caserios asignados al usuario
router.get('/estados', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetEstadosEncuestas);//Creamos ruta para listar los caserios asignados al usuario
router.get('/nivel', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetTecnologicoEncuestas);//Creamos ruta para listar los caserios asignados al usuario
router.post('/', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostEncuesta)
router.post('/geoubicacion', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostGeoUbicacion)
router.post('/junta', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostJunta);
router.post('/servicio/basico', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostServBasico);
router.post('/servicio/local', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostServLocal);

router.post('/detalle/org', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostDetalleOrg);
router.post('/detalle/importacion', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostDetalleImportacion);
router.post('/detalle/exportacion', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostDetalleExportacion);
router.post('/detalle/uso', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostDetalleUsoTierra);
router.post('/detalle/financiamiento', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostDetalleFinanciamiento);
router.post('/detalle/requerimiento', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostDetalleRequerimiento);

router.post('/junta/buscar',authMiddleware,checkTipo(["Admin", "Encuestador"]), ctrGetJuntaByID)
module.exports = router;