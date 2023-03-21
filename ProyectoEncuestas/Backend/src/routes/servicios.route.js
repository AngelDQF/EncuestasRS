
const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const {ctrGetServiciosLocales,  ctrGetServiciosLocalesDesactivados,  ctrGetServiciosBasicos,  ctrGetServiciosBasicosDesactivados} = require('../controllers/servicios.controller');
const {authMiddleware}=require("../middleware/session")
const { checkTipo } = require("../middleware/role");

router.get('/locales',authMiddleware,checkTipo(["Admin"]),  ctrGetServiciosLocales);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.get('/locales/desactivados', authMiddleware,checkTipo(["Admin"]), ctrGetServiciosLocalesDesactivados);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.get('/basicos', authMiddleware,checkTipo(["Admin"]), ctrGetServiciosBasicos);//TODO: Creamos la ruta de tipo get para listar todos Cargos
router.get('/basicos/desactivados', authMiddleware,checkTipo(["Admin"]), ctrGetServiciosBasicosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Cargos Desactivados

module.exports = router;//TODO: Exportamos las rutas que hemos creados
