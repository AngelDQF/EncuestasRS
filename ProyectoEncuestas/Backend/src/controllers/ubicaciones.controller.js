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
const ctrGetMunicipios = async (req, res) => {
  try {
    ubicacionesModel.getMunicipios().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_MUNICIPIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetMunicipiosByDep = async (req, res) => {
  try {
    const { id } = req.body
    ubicacionesModel.getMunicipiosByDepartamento(id).then(results => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_MUNICIPIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}

const ctrGetAldeas = async (req, res) => {
  try {
    ubicacionesModel.getAldeas().then(results => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ALDEAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetCaserios = async (req, res) => {
  try {
    ubicacionesModel.getCaserios().then(results => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_CASERIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetUbicacionesSinAsignar = async (req, res) => {
  try {
    const { dep, id } = req.body;
    ubicacionesModel.getMunicipiosSinAsignar(dep, id).then(results => {
      if (results == "error") {
        res.json({ results: { mensaje: "Error al Buscar Municipios", estado: 2 } })
      } else if (results == "advertencia") {
        res.json({ results: { mensaje: "Este usuario ya tiene asignados todos los municipios de este departamento", estado: 1 } })
      } else {
        res.json({ results })
      }
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_UBICACIONES_SIN_ASIGNAR');
  }
}
module.exports = { ctrGetDepartamentos, ctrGetMunicipios, ctrGetAldeas, ctrGetCaserios, ctrGetMunicipiosByDep, ctrGetUbicacionesSinAsignar }