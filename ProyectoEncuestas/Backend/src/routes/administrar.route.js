const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const {ctrGetEncuestasUser,ctrGetEncuestasDep,ctrGetEncuestasMun} = require('../controllers/administrar.controller');
const { checkTipo } = require("../middleware/role");
const {authMiddleware}=require("../middleware/session");

router.post('/encuestas',authMiddleware,checkTipo(["Admin","Encuestador"]),ctrGetEncuestasUser);
router.post('/encuestas/dep',authMiddleware,ctrGetEncuestasDep);
router.post('/encuestas/mun',authMiddleware,ctrGetEncuestasMun);

module.exports = router;//TODO: Exportamos las rutas que hemos creados
