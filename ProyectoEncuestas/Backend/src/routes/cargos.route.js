const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetCargos, ctrGetCargosDesactivados, ctrGetCargoById, ctrPostCargo } = require('../controllers/cargos.controller');
const { checkTipo } = require("../middleware/role");
const { authMiddleware } = require("../middleware/session")
const { validatorCreateCargo } = require("../validators/cargos.validator")
router.get('/', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetCargos);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.get('/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetCargosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.post('/', validatorCreateCargo, authMiddleware, checkTipo(["Admin"]), ctrPostCargo);//TODO: Creamos la ruta de tipo post para crear 
router.post('/buscar', authMiddleware, checkTipo(["Admin"]), ctrGetCargoById)
module.exports = router;//TODO: Exportamos las rutas que hemos creados