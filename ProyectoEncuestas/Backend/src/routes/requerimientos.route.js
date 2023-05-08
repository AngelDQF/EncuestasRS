const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const {
  ctrGetMercados, ctrGetMercadosDesactivados, ctrGetUsosTierra, ctrGetUsosTierraDesactivados, ctrGetEstructuras, ctrGetEstructurasDesactivados, ctrGetTenenciaTierra, ctrGetTenenciaTierraDesactivados, ctrGetMercadoById, ctrPostMercado, ctrPutMercado, ctrPutMercadoEstado, ctrGetUsoTierraById, ctrPostUsoTierra, ctrPutUsoTierra, ctrPutUsoTierraEstado, ctrGetEstructuraById, ctrPostEstructura, ctrPutEstructura, ctrPutEstructuraEstado, ctrGetTenenciaById, ctrPostTenencia, ctrPutTenencia, ctrPutTenenciaEstado
} = require('../controllers/requerimientos.controller');//TODO: Importamos las funciones del controlador
const { authMiddleware } = require("../middleware/session")
const { checkTipo } = require("../middleware/role");

//Mercados
router.get('/mercados', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetMercados);
router.get('/mercados/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetMercadosDesactivados);
router.post('/mercados', authMiddleware, checkTipo(["Admin"]), ctrGetMercadoById);
router.post('/mercados/crear', authMiddleware, checkTipo(["Admin"]), ctrPostMercado);
router.put('/mercados/editar', authMiddleware, checkTipo(["Admin"]), ctrPutMercado);
router.put('/mercados/editar/estado', authMiddleware, checkTipo(["Admin"]), ctrPutMercadoEstado);
//Usos Tierra
router.get('/tierras/usos', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetUsosTierra);
router.get('/tierras/usos/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetUsosTierraDesactivados);
router.post('/tierras/usos', authMiddleware, checkTipo(["Admin"]), ctrGetUsoTierraById);
router.post('/tierras/usos', authMiddleware, checkTipo(["Admin"]), ctrPostUsoTierra);
router.put('/tierras/usos', authMiddleware, checkTipo(["Admin"]), ctrPutUsoTierra);
router.put('/tierras/usos', authMiddleware, checkTipo(["Admin"]), ctrPutUsoTierraEstado);
//Estructuras
router.get('/estructuras', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetEstructuras);
router.get('/estructuras/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetEstructurasDesactivados);
router.post('/estructuras', authMiddleware, checkTipo(["Admin"]), ctrGetEstructuraById);
router.post('/estructuras/crear', authMiddleware, checkTipo(["Admin"]), ctrPostEstructura);
router.put('/estructuras/editar', authMiddleware, checkTipo(["Admin"]), ctrPutEstructura);
router.put('/estructuras/editar/estado', authMiddleware, checkTipo(["Admin"]), ctrPutEstructuraEstado);
//Tenencia
router.get('/tierras/tenencia', authMiddleware, checkTipo(["Admin", "Encuestador"]), ctrGetTenenciaTierra);
router.get('/tierras/tenencia/desactivados', authMiddleware, checkTipo(["Admin"]), ctrGetTenenciaTierraDesactivados);
router.post('/tierras/tenencia', authMiddleware, checkTipo(["Admin"]), ctrGetTenenciaById);
router.post('/tierras/tenencia/crear', authMiddleware, checkTipo(["Admin"]), ctrPostTenencia);
router.put('/tierras/tenencia/editar', authMiddleware, checkTipo(["Admin"]), ctrPutTenencia);
router.put('/tierras/tenencia/editar/estado', authMiddleware, checkTipo(["Admin"]), ctrPutTenenciaEstado);

module.exports = router;//TODO: Exportamos las rutas que hemos creados