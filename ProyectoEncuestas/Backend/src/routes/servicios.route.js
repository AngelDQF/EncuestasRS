
const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrGetServiciosLocales, ctrGetServiciosLocalesDesactivados, ctrGetServiciosBasicos, ctrGetServiciosBasicosDesactivados, ctrPutServicioLocal, ctrGetServicioById, ctrPostServicio, ctrPutServicio, ctrPutServicioDatos, ctrPutServicioEstado} = require('../controllers/servicios.controller');
const { authMiddleware } = require("../middleware/session")
const { checkTipo } = require("../middleware/role");

router.get('/locales', authMiddleware, checkTipo(["Admin","Encuestador"]), ctrGetServiciosLocales);//TODO: Creamos la ruta de tipo get para listar todos Servicios
router.put('/locales', authMiddleware, checkTipo(["Admin"]), ctrPutServicioLocal);
router.get('/locales/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetServiciosLocalesDesactivados);//TODO: Creamos la ruta de tipo get para listar todos Servicios
router.get('/basicos', authMiddleware, checkTipo(["Admin","Encuestador"]), ctrGetServiciosBasicos);//TODO: Creamos la ruta de tipo get para listar todos Servicios
router.get('/basicos/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetServiciosBasicosDesactivados);//TODO: Creamos la ruta de tipo get para listar todos los Servicios Desactivados
//Servicios
router.post('/', authMiddleware, checkTipo(["Admin"]), ctrGetServicioById);
router.post('/crear', authMiddleware, checkTipo(["Admin"]), ctrPostServicio);
router.put('/editar', authMiddleware, checkTipo(["Admin"]), ctrPutServicio);
router.put('/editar/tipo', authMiddleware, checkTipo(["Admin"]), ctrPutServicioDatos);
router.put('/editar/estado', authMiddleware, checkTipo(["Admin"]), ctrPutServicioEstado);

module.exports = router;//TODO: Exportamos las rutas que hemos creados
