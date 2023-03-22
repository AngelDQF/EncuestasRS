const { naturalesModel } = require('../models/index.model');//TODO: Importamos el modelo de Naturales
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetBosques = async (req, res) => {//TODO: Controlador para hacer get a los bosques
  try {
    naturalesModel.getBosques().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_SUELOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }

}
const ctrGetBosquesDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Bosques Desactivados
  try {
    naturalesModel.getBosquesDesactivados().then(result => {//TODO: Ejecutamos la funcion getSuelos del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_SUELOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetSuelos = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Suelos
  try {
    naturalesModel.getSuelos().then(result => {//TODO: Ejecutamos la funcion getSuelosDesactivados del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_SUELOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetSuelosDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Tipos de Suelos Desactivados
  try {
    naturalesModel.getSuelosDesactivados().then(result => {//TODO: Ejecutamos la funcion getSUELOS del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_SUELOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }

}
module.exports = { ctrGetBosques, ctrGetBosquesDesactivados,ctrGetSuelos,ctrGetSuelosDesactivados};//TODO: Exportamos las funciones del controlador