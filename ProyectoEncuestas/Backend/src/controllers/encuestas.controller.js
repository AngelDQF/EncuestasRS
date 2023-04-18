const { encuestasModel } = require('../models/index.model');//TODO: Importamos el modelo de Naturales
const { naturalesModel } = require('../models/index.model');
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetEncuestas = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    encuestasModel.getEncuestas().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ENCUESTAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetDepartamentosUsuario = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const { id } = req.body
    if(id===""){
      return
    }
    encuestasModel.getDepartamentosUsuario(id).then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({ results: result });//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_DEPARTAMENTOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);
  }
};
const ctrGetMunicipiosUsuario = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const { id, dep } = await req.body
    encuestasModel.getMunicipiosUsuario(id, dep).then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({ results: result });//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_MUNICIPIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);
  }
};
const ctrGetAldeasUsuario = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const { id } = await req.body
    encuestasModel.getAldeasUsuario(id).then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({ results: result });//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_ALDEAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);
  }
};
const ctrGetCaseriosUsuario = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const { id } = await req.body
    encuestasModel.getCaseriosUsuario(id).then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({ results: result });//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_CASERIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);
  }
};
const ctrGetOrganizacion = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    encuestasModel.getOrganizacion().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ORGANIZACION');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetOrgLocales = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    encuestasModel.getOrgLocales().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ORGANIZACIONES');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetOrganizacionesSociales = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    encuestasModel.getOrganizacionesSociales().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ORGANIZACION');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetSuelos = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    naturalesModel.getSuelos().then(result => {//TODO: Ejecutamos la funcion getSuelosDesactivados del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_SUELOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetEstructurasEncuestas = async (req, res) => {//TODO: Controlador para hacer get a los Fuentes de Financiamientos
  try {
    encuestasModel.getEstructurasEncuestas().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ESTRUCTURAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetEstadosEncuestas = async (req, res) => {//TODO: Controlador para hacer get a los Fuentes de Financiamientos
  try {
    encuestasModel.getEstadosEncuestas().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ESTADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetTecnologicoEncuestas = async (req, res) => {//TODO: Controlador para hacer get a los Fuentes de Financiamientos
  try {
    encuestasModel.getTecnologicoEncuestas().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_NIVEL_TECNOLOGICO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
module.exports = { ctrGetEncuestas, ctrGetDepartamentosUsuario, ctrGetOrganizacion, ctrGetSuelos, ctrGetOrganizacionesSociales, ctrGetMunicipiosUsuario, ctrGetAldeasUsuario, ctrGetCaseriosUsuario,ctrGetEstructurasEncuestas,ctrGetEstadosEncuestas,ctrGetTecnologicoEncuestas,ctrGetOrgLocales};//TODO: Exportamos las funciones del controlador