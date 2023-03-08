const { financiamientosModel } = require('../models/index.model');//TODO: Importamos el modelo de Naturales
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetTiposFinanciamientos = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    financiamientosModel.getTiposFinanciamientos().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_TIPOS_FINANCIAMIENTOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }

}
const ctrGetTiposFinanciamientosDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Tipos de Financiamientos Desactivados
  try {
    financiamientosModel.getTiposFinanciamientosDesactivados().then(result => {//TODO: Ejecutamos la funcion getSuelos del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_TIPOS_FINANCIAMIENTOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
module.exports = { ctrGetTiposFinanciamientos, ctrGetTiposFinanciamientosDesactivados};//TODO: Exportamos las funciones del controlador