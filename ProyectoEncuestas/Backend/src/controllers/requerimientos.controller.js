const { requerimientosModel } = require('../models/index.model');//TODO: Importamos el modelo de Naturales
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetMercados = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    requerimientosModel.getMercados().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_MERCADOS_');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetMercadosDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Tipos de Financiamientos Desactivados
  try {
    requerimientosModel.getMercadosDesactivados().then(result => {//TODO: Ejecutamos la funcion getSuelos del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_MERCADOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetUsosTierra = async (req, res) => {//TODO: Controlador para hacer get a los Fuentes de Financiamientos
  try {
    requerimientosModel.getUsosTierra().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_USOS_TIERRA');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetUsosTierraDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Fuentes de Financiamientos Desactivados
  try {
    requerimientosModel.getUsosTierraDesactivados().then(result => {//TODO: Ejecutamos la funcion getSuelos del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_USOS_TIERRA_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetEstructuras = async (req, res) => {//TODO: Controlador para hacer get a los Fuentes de Financiamientos
  try {
    requerimientosModel.getEstructuras().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ESTRUCTURAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetEstructurasDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Fuentes de Financiamientos Desactivados
  try {
    requerimientosModel.getEstructurasDesactivados().then(result => {//TODO: Ejecutamos la funcion getSuelos del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ESTRUCTURAS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetTenenciaTierra = async (req, res) => {//TODO: Controlador para hacer get a los Fuentes de Financiamientos
  try {
    requerimientosModel.getTenenciaTierra().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_TENENCIAS_TIERRA');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetTenenciaTierraDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Fuentes de Financiamientos Desactivados
  try {
    requerimientosModel.getTenenciaTierraDesactivados().then(result => {//TODO: Ejecutamos la funcion getSuelos del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_TENENCIAS_TIERRA_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
module.exports = { ctrGetMercados, ctrGetMercadosDesactivados, ctrGetUsosTierra, ctrGetUsosTierraDesactivados, ctrGetEstructuras, ctrGetEstructurasDesactivados, ctrGetTenenciaTierra, ctrGetTenenciaTierraDesactivados };//TODO: Exportamos las funciones del controlador