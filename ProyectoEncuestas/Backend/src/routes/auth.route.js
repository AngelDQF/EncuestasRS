const express =require("express");//TODO: Importamos express para poder usar el metodo Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const {validatorCreateUsuario,validatorLogin}=require('../validators/auth.js')//TODO: Importamos los validadores de auth.js
const { ctrPostUsuario,ctrLogin } = require("../controllers/auth.controller");//TODO: Exportamos las funciones del controlador de Usuarios para las rutas

router.post('/login',validatorLogin,ctrLogin);//TODO: Creamos rutas para loguearnos
router.post('/usuario',validatorCreateUsuario, ctrPostUsuario);//TODO: Creamos ruta para poder ingresar un nuevo usuario

module.exports = router;//TODO: Exportamos las rutas que hemos creado