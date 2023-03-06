const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetEjes, ctrGetEjesDesactivados,ctrPostEje, ctrGetEje, ctrPutEje, ctrPutEjeEstado } = require('../controllers/ejes.controller');
const { validatorCreateEje, validatorGetEje, validatorUpdateEje, validatorUpdateEjeEstado } = require('../validators/ejes');//TODO: Importamos el ValidatorCreateEje
const { customHeader } = require('../middleware/customHeader');//TODO: Importamos el customHeader


router.get('/', ctrGetEjes);//TODO: Creamos la ruta de tipo get para listar todos los usuarios
router.get('/desactivados', ctrGetEjesDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los usuarios
router.get('/:eje', validatorGetEje, ctrGetEje);//TODO: Creamos la ruta de tipo get para listar todos los usuarios

router.post('/', validatorCreateEje, ctrPostEje);//TODO: Creamos la ruta de tipo post para crear 
router.put('/', validatorUpdateEje, ctrPutEje);//TODO: Creamos la ruta de tipo put para actualizar el nombre del eje
router.put('/estado', validatorUpdateEjeEstado, ctrPutEjeEstado);
module.exports = router;//TODO: Exportamos las rutas que hemos creados