const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetGrados} = require('../controllers/escolaridad.controller');
const { checkTipo } = require("../middleware/role");
const {authMiddleware}=require("../middleware/session")

router.get('/',authMiddleware,checkTipo(["Admin"]),ctrGetGrados);
module.exports=router;
