const express = require("express"); 
const router = express.Router();
const { ctrGetGrados,ctrGetGradoByID, ctrGetGradosDesactivados,ctrPostGrado,ctrPutGradoEstado,putNombreGrado } = require('../controllers/escolaridad.controller');
const {validatorCreateGrado}= require('../validators/escolaridad.validator');
const { checkTipo } = require("../middleware/role");
const { authMiddleware } = require("../middleware/session")

router.get('/', authMiddleware, checkTipo(["Admin","Encuestador"]), ctrGetGrados);
router.get('/desactivados', authMiddleware, checkTipo(["Admin"]), 
ctrGetGradosDesactivados)
router.post('/buscar', authMiddleware, checkTipo(["Admin"]), ctrGetGradoByID);
router.post('/agregar', authMiddleware, checkTipo(["Admin"]),validatorCreateGrado, ctrPostGrado);
router.put('/editar/estado', authMiddleware, checkTipo(["Admin"]), ctrPutGradoEstado);
router.put('/editar/nombre', authMiddleware, checkTipo(["Admin"]), putNombreGrado);

module.exports = router;
