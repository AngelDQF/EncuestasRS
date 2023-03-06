const { organizacionesModel } = require('../models/index.model');//TODO: Importamos el modelo de ejes
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetTiposOrganizaciones = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    organizacionesModel.getTipoOrganizaciones().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_TIPOS_ORGANIZACIONES');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetTiposOrgDes = async (req, res) => {//TODO: Funcion para hacer get a las Organizaciones Desactivadas
  try {
    organizacionesModel.getTipoOrganizacionesDesactivadas().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_TIPOS_ORGANIZACIONES');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
module.exports = { ctrGetTiposOrganizaciones,ctrGetTiposOrgDes };//TODO: Exportamos las funciones del controlador