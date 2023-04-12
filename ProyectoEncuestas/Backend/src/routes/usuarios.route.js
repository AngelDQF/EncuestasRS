const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetUsuarios,ctrGetUsuariosDesactivados ,ctrGetUsuariosTipos, ctrPostUsuario, ctrPutRestablecerContraseña,ctrGetUsuarioByID,ctrPutUsuariosEstado,ctrGetAsignaciones,ctrGetAsignacionByID,ctrPutEstadoAsignacion} = require("../controllers/usuarios.controller");//TODO: Exportamos las funciones de los controladores para las rutas
const { checkTipo } = require("../middleware/role");
const {authMiddleware}=require("../middleware/session")
router.get('/', authMiddleware,checkTipo(["Admin"]),ctrGetUsuarios);//TODO: Creamos la ruta de tipo get para listar todos los usuarios
router.post('/buscar', authMiddleware,ctrGetUsuarioByID);//TODO: Creamos la ruta de tipo get para listar todos los usuarios
router.get('/des',authMiddleware,ctrGetUsuariosDesactivados);
router.get('/tipos',authMiddleware,ctrGetUsuariosTipos);
router.post('/',authMiddleware,ctrPostUsuario);
router.put('/editar/estado',authMiddleware,ctrPutUsuariosEstado);
router.put('/editar/password',authMiddleware,ctrPutRestablecerContraseña);
router.post('/asig',authMiddleware,ctrGetAsignaciones);
router.post('/asig/buscar',authMiddleware,ctrGetAsignacionByID);
router.put('/asig',authMiddleware,ctrPutEstadoAsignacion);

module.exports = router;//TODO: Exportamos las rutas que hemos creado