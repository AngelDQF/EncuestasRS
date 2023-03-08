const { naturalesModel } = require('../models/index.model');//TODO: Importamos el modelo de Naturales
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetBosques = async (req, res) => {//TODO: Controlador para hacer get a los bosques
  try {
    naturalesModel.getBosques().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_EJES');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }

}
const ctrGetBosquesDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    ejesModel.getEjesDesactivados().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_EJES_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }

}
module.exports = { ctrGetBosques, ctrGetBosquesDesactivados};//TODO: Exportamos las funciones del controlador