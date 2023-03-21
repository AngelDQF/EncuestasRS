const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetEjes, ctrGetEjesDesactivados,ctrPostEje, ctrGetEje, ctrPutEje, ctrPutEjeEstado } = require('../controllers/ejes.controller');
const { validatorCreateEje, validatorGetEje, validatorUpdateEje, validatorUpdateEjeEstado } = require('../validators/ejes');//TODO: Importamos el ValidatorCreateEje
const {authMiddleware}=require("../middleware/session")
const { checkTipo } = require("../middleware/role");

router.get('/',authMiddleware,checkTipo(["Admin"]), ctrGetEjes);//TODO: Creamos la ruta de tipo get para listar todos los usuarios
router.get('/desactivados', authMiddleware,checkTipo(["Admin"]),ctrGetEjesDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los usuarios
router.get('/:eje',authMiddleware,checkTipo(["Admin"]), validatorGetEje, ctrGetEje);//TODO: Creamos la ruta de tipo get para listar todos los usuarios

router.post('/', authMiddleware,checkTipo(["Admin"]),validatorCreateEje, ctrPostEje);//TODO: Creamos la ruta de tipo post para crear 
router.put('/',authMiddleware,checkTipo(["Admin"]), validatorUpdateEje, ctrPutEje);//TODO: Creamos la ruta de tipo put para actualizar el nombre del eje
router.put('/estado',authMiddleware,checkTipo(["Admin"]), validatorUpdateEjeEstado, ctrPutEjeEstado);
module.exports = router;//TODO: Exportamos las rutas que hemos creados