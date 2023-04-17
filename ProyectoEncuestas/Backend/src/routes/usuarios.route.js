const express = require("express"); 
const router = express.Router();
const { ctrGetUsuarios,ctrGetUsuariosDesactivados ,ctrGetUsuariosTipos, ctrPostUsuario, ctrPutRestablecerContraseña,ctrGetUsuarioByID,ctrPutUsuariosEstado,ctrGetAsignaciones,ctrGetAsignacionByID,ctrPutEstadoAsignacion,recuperarContra} = require("../controllers/usuarios.controller");
const { checkTipo } = require("../middleware/role");
const {authMiddleware}=require("../middleware/session");
router.get('/', authMiddleware,checkTipo(["Admin"]),ctrGetUsuarios);
router.post('/buscar', authMiddleware,ctrGetUsuarioByID);
router.get('/des',authMiddleware,ctrGetUsuariosDesactivados);
router.get('/tipos',authMiddleware,ctrGetUsuariosTipos);
router.post('/',authMiddleware,ctrPostUsuario);
router.put('/editar/estado',authMiddleware,ctrPutUsuariosEstado);
router.put('/editar/password',authMiddleware,ctrPutRestablecerContraseña);
router.post('/asig',authMiddleware,ctrGetAsignaciones);
router.post('/asig/buscar',authMiddleware,ctrGetAsignacionByID);
router.put('/asig',authMiddleware,ctrPutEstadoAsignacion);
router.post('/recuperar',recuperarContra)
module.exports = router;