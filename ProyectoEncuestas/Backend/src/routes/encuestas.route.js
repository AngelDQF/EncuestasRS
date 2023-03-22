const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const {ctrGetEncuestas,ctrGetDepartamentosUsuario}=require('../controllers/encuestas.controller')
const {authMiddleware}=require("../middleware/session")
const { checkTipo } = require("../middleware/role");
router.get('/listar',authMiddleware,checkTipo(["Admin"]),ctrGetEncuestas);//Creamos ruta para listar las aldeas
router.post('/departamentos',authMiddleware,checkTipo(["Admin","Encuestador"]),ctrGetDepartamentosUsuario);//Creamos ruta para listar las aldeas

module.exports=router