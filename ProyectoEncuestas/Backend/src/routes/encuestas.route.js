const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const {ctrGetEncuestas}=require('../controllers/encuestas.controller')

router.get('/',ctrGetEncuestas);//Creamos ruta para listar las aldeas
module.exports=router