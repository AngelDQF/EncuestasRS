const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetUsuarios,ctrGetUsuariosDesactivados ,ctrGetUsuariosTipos, ctrPostUsuario} = require("../controllers/usuarios.controller");//TODO: Exportamos las funciones de los controladores para las rutas

router.get('/', ctrGetUsuarios);//TODO: Creamos la ruta de tipo get para listar todos los usuarios
router.get('/des',ctrGetUsuariosDesactivados)
router.get('/tipos',ctrGetUsuariosTipos)
router.post('/',ctrPostUsuario)

module.exports = router;//TODO: Exportamos las rutas que hemos creado