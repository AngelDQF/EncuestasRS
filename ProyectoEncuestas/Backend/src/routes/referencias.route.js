const express = require("express");
const router = express.Router();
const { ctrPostReferencia, ctrPostReferenciaJunta } = require("../controllers/referencias.controller")
const { checkTipo } = require("../middleware/role");
const { authMiddleware } = require("../middleware/session")
router.post('/',authMiddleware,checkTipo(["Admin", "Encuestador"]), ctrPostReferencia)
router.post('/junta',authMiddleware,checkTipo(["Admin", "Encuestador"]), ctrPostReferenciaJunta)

module.exports=router