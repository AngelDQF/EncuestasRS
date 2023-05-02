const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const { ctrPostMesa,ctrGetMesaByID,ctrPostJuntaMesa } = require('../controllers/mesas.controller');//TODO: Importamos las funciones del controlador
const { authMiddleware } = require("../middleware/session")
const { checkTipo } = require("../middleware/role");
router.post('/crear',authMiddleware, checkTipo(["Admin", "Encuestador"]),ctrPostMesa);
router.post('/buscar',authMiddleware,checkTipo(["Admin", "Encuestador"]), ctrGetMesaByID);
router.post('/junta',authMiddleware,checkTipo(["Admin", "Encuestador"]), ctrPostJuntaMesa);


module.exports = router;//TODO: Exportamos las rutas que hemos creados
