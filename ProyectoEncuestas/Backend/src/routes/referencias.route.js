const express = require("express");
const router = express.Router();
const { ctrGetActas, ctrGetActasByDep, ctrGetDNI, ctrPostReferenciaActa, ctrPostReferenciaJunta,ctrGetDNIByDep, ctrGetDNIByMun, ctrGetActasByMun  } = require("../controllers/referencias.controller")
const { checkTipo } = require("../middleware/role");
const { authMiddleware } = require("../middleware/session");

router.get('/actas', authMiddleware, checkTipo(["Admin"]), ctrGetActas);
router.post('/actas/departamento', authMiddleware, checkTipo(["Admin"]), ctrGetActasByDep);
router.post('/actas/municipio', authMiddleware, checkTipo(["Admin"]), ctrGetActasByMun);
router.get('/junta', authMiddleware, checkTipo(["Admin"]), ctrGetDNI);
router.post('/', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostReferenciaActa)
router.post('/junta', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostReferenciaJunta)
router.post('/junta/departamento', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetDNIByDep)
router.post('/junta/municipio', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetDNIByMun)

module.exports = router