const express = require("express"); //TODO: Importamos express para poder usar el metodo de Router
const router = express.Router();//TODO: Creamos una instancia de Router para poder crear rutas
const {ctrGetEncuestasUser,ctrGetEncuestasDep,ctrGetEncuestasMun} = require('../controllers/administrar.controller');
const { checkTipo } = require("../middleware/role");
const {authMiddleware}=require("../middleware/session");
const {validatorGetEncuestasUser,validatorGetEncuestasUbicacion}=require("../validators/administrar.validator");

router.post('/encuestas',authMiddleware,checkTipo(["Admin","Encuestador"]),validatorGetEncuestasUser,ctrGetEncuestasUser);
router.post('/encuestas/dep',authMiddleware,checkTipo(["Admin","Encuestador"]),validatorGetEncuestasUbicacion,ctrGetEncuestasDep);
router.post('/encuestas/mun',authMiddleware,checkTipo(["Admin","Encuestador"]),validatorGetEncuestasUbicacion,ctrGetEncuestasMun);

module.exports = router;//TODO: Exportamos las rutas que hemos creados
