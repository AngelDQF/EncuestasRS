const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetCargos,ctrGetCargosDesactivados,ctrGetCargoById } = require('../controllers/cargos.controller');
const { checkTipo } = require("../middleware/role");
const {authMiddleware}=require("../middleware/session")
router.get('/',authMiddleware,checkTipo(["Admin"]),ctrGetCargos);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.get('/desactivados',authMiddleware,checkTipo(["Admin"]), ctrGetCargosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.get('/:id',authMiddleware,checkTipo(["Admin"]), ctrGetCargoById);//TODO: Creamos la ruta de tipo get para listar todos Cargos

module.exports = router;//TODO: Exportamos las rutas que hemos creados