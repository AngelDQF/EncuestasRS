const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetCargos, ctrPutCargo, ctrPutCargoEstado, ctrGetCargosDesactivados, ctrGetCargoById, ctrPostCargo } = require('../controllers/cargos.controller');
const { checkTipo } = require("../middleware/role");
const { authMiddleware } = require("../middleware/session")
const { validatorCreateCargo, validatorGetCargoByID, validatorPutCargo, validatorPutCargoEstado } = require("../validators/cargos.validator")

router.get('/', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetCargos);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.get('/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetCargosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.post('/', authMiddleware, checkTipo(["Admin"]), validatorCreateCargo, ctrPostCargo);//TODO: Creamos la ruta de tipo post para crear 
router.post('/buscar', authMiddleware, checkTipo(["Admin"]), validatorGetCargoByID, ctrGetCargoById)
router.put('/', authMiddleware, checkTipo(["Admin"]), validatorPutCargo, ctrPutCargo)
router.put('/estado', authMiddleware, checkTipo(["Admin"]), validatorPutCargoEstado, ctrPutCargoEstado)

module.exports = router;//TODO: Exportamos las rutas que hemos creados