const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const {ctrGetAldeas,ctrGetAldea}=require('../controllers/aldeas.controller')

router.get('/',ctrGetAldeas);//Creamos ruta para listar las aldeas
router.get('/:aldea',ctrGetAldea);//Creamos ruta para listar las aldeas

module.exports=router