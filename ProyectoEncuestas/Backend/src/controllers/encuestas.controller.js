const { encuestasModel } = require('../models/index.model');//TODO: Importamos el modelo de Naturales
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetEncuestas = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    encuestasModel.getEncuestas().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_TIPOS_FINANCIAMIENTOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
module.exports = { ctrGetEncuestas };//TODO: Exportamos las funciones del controlador