const { ubicacionesModel } = require('../models/index.model');//TODO: Importamos el modelo de ejes
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const ctrGetDepartamentos = async (req, res) => {
  try {
    ubicacionesModel.getDepartamentos().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_DEPARTAMENTOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
/**
 * TODO: Controlador para funcion de buscar departamentos
 * @param {*} req 
 * @param {*} res 
 */
const ctrGetDepartamento = async (req, res) => {
  try {
    const {dep}=req.body;
    ubicacionesModel.getDepartamentoByName(dep).then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_DEPARTAMENTO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetMunicipios = async (req, res) => {
  try {
    ubicacionesModel.getMunicipios().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_MUNICIPIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetAldeas = async (req, res) => {
  try {
    ubicacionesModel.getAldeas().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ALDEAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetCaserios = async (req, res) => {
  try {
    ubicacionesModel.getCaserios().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_CASERIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
module.exports = { ctrGetDepartamentos,ctrGetDepartamento ,ctrGetMunicipios,ctrGetAldeas,ctrGetCaserios}