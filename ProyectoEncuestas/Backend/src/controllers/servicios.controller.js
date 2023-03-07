const { serviciosModel } = require('../models/index.model');//TODO: Importamos el modelo de ejes
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const ctrGetServiciosLocales = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    serviciosModel.getServiciosLocales().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_SERVICIOS_LOCALES');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetServiciosLocalesDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    serviciosModel.getServiciosLocalesDesactivadas().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_SERVICIOS_LOCALES_DESACTIVADAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetServiciosBasicos = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    serviciosModel.getServiciosBasicos().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_SERVICIOS_BASICOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetServiciosBasicosDesactivados = async (req, res) => {//TODO: Funcion para hacer get a las Organizaciones Desactivadas
  try {
    serviciosModel.getServiciosBasicosDesactivados().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_SERVICIOS_BASICOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
module.exports = { ctrGetServiciosLocales,  ctrGetServiciosLocalesDesactivados,  ctrGetServiciosBasicos,  ctrGetServiciosBasicosDesactivados};//TODO: Exportamos las funciones del controlador