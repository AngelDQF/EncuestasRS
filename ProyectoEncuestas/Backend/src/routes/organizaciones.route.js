const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetTiposOrganizaciones,ctrGetTiposOrgDes,ctrGetOrganizaciones,ctrGetOrganizacionesDesactivadas,ctrPostOrg, ctrPutOrg, ctrPutOrgEstado,ctrPutOrgDatos, ctrPostTipoOrg,ctrPutTipoOrg, ctrPutTipoOrgEstado,ctrGetOrganizacionById,ctrGetTipoOrganizacionById} = require('../controllers/organizaciones.controller');
const {authMiddleware}=require("../middleware/session")
const { checkTipo } = require("../middleware/role");

router.get('/',authMiddleware,checkTipo(["Admin"]),  ctrGetOrganizaciones);
router.get('/desactivados',authMiddleware,checkTipo(["Admin"]),  ctrGetOrganizacionesDesactivadas);
router.get('/tipos', authMiddleware,checkTipo(["Admin"]), ctrGetTiposOrganizaciones);
router.get('/tipos/desactivados', authMiddleware,checkTipo(["Admin"]), ctrGetTiposOrgDes);
router.post('/',authMiddleware,checkTipo(["Admin"]), ctrPostOrg);
router.post('/buscar',authMiddleware,checkTipo(["Admin"]), ctrGetOrganizacionById);
router.put('/',authMiddleware,checkTipo(["Admin"]), ctrPutOrg);
router.put('/datos',authMiddleware,checkTipo(["Admin"]), ctrPutOrgDatos);
router.put('/estado',authMiddleware,checkTipo(["Admin"]), ctrPutOrgEstado);
router.post('/tipos',authMiddleware,checkTipo(["Admin"]), ctrPostTipoOrg);
router.put('/tipos',authMiddleware,checkTipo(["Admin"]), ctrPutTipoOrg);
router.put('/tipos/estado',authMiddleware,checkTipo(["Admin"]), ctrPutTipoOrgEstado);
router.post('/tipos/buscar',authMiddleware,checkTipo(["Admin"]), ctrGetTipoOrganizacionById);

module.exports = router;//TODO: Exportamos las rutas que hemos creados
