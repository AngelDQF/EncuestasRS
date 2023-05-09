const express = require("express");
const router = express.Router();
const { ctrGetActas, ctrGetActasByDep, ctrGetDNI, ctrPostReferenciaActa, ctrPostReferenciaJunta } = require("../controllers/referencias.controller")
const { checkTipo } = require("../middleware/role");
const { authMiddleware } = require("../middleware/session");

router.get('/actas', authMiddleware, checkTipo(["Admin"]), ctrGetActas);
router.post('/actas/departamento', authMiddleware, checkTipo(["Admin"]), ctrGetActasByDep);
router.get('/junta', authMiddleware, checkTipo(["Admin"]), ctrGetDNI);
router.post('/', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostReferenciaActa)
router.post('/junta', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrPostReferenciaJunta)

module.exports = router