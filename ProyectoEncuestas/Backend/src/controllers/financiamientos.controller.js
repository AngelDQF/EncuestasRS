const { financiamientosModel } = require('../models/index.model');//TODO: Importamos el modelo de Naturales
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetTiposFinanciamientos = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    financiamientosModel.getTiposFinanciamientos().then(results => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_TIPOS_FINANCIAMIENTOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetTiposFinanciamientosDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Tipos de Financiamientos Desactivados
  try {
    financiamientosModel.getTiposFinanciamientosDesactivados().then(results => {//TODO: Ejecutamos la funcion getTipoFins del modelo
      res.json({ results })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_TIPOS_FINANCIAMIENTOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetFuentesFinanciamientos = async (req, res) => {//TODO: Controlador para hacer get a los Fuentes de Financiamientos
  try {
    financiamientosModel.getFuentesFinanciamientos().then(results => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_FUENTES_FINANCIAMIENTOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetFuentesFinanciamientosDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Fuentes de Financiamientos Desactivados
  try {
    financiamientosModel.getFuentesFinanciamientosDesactivados().then(results => {
      res.json({ results })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_FUENTES_FINANCIAMIENTOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
//Tipos de Financiamientos
const ctrGetTipoFinById = async (req, res) => {
  try {
    const { id } = req.body;
    await financiamientosModel.getTipoFin(id).then(results => {
      res.json({ results })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_TIPO_FINANCIAMIENTO');
  }
}
const ctrPostTipoFin = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { tipo, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await financiamientosModel.postTipoFin(tipo, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Tipo de Financiamiento Agregado Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Tipo de Financiamiento con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_TIPO_FINANCIAMIENTO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutTipoFin = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { id, tipo } = req.body;//TODO: Extraemos los datos del body
    const resultado = await financiamientosModel.putTipoFin(id, tipo);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Tipo de Financiamiento editado exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Tipo de Financiamiento con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún Tipo de Financiamiento", estado: 1 } });//TODO: Mostramos el resultado en un json
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_TIPO_FINANCIAMIENTO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutTipoFinEstado = async (req, res) => {
  try {

    const { id, estado } = req.body;
    const resultado = await financiamientosModel.putTipoFinEstado(id, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "El estado se cambio correctamente", estado: 2 } });
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún Tipo de Financiamiento", estado: 1 } });
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_TIPO_FINANCIAMIENTO_ESTADO');
  }
}
//Fuentes de Financiamiento
const ctrGetFuenteFinById = async (req, res) => {
  try {
    const { id } = req.body;
    await financiamientosModel.getFuenteFin(id).then(results => {
      res.json({ results })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_FUENTE_FINANCIAMIENTO');
  }
}
const ctrPostFuenteFin = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { fuente, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await financiamientosModel.postFuenteFin(fuente, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Fuente de Financiamiento Agregado Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Fuente de Financiamiento con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_FUENTE_FINANCIAMIENTO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutFuenteFin = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { id, fuente } = req.body;//TODO: Extraemos los datos del body
    const resultado = await financiamientosModel.putFuenteFin(id, fuente);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Fuente de Financiamiento editado exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Fuente de Financiamiento con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningúna Fuente de Financiamiento", estado: 1 } });//TODO: Mostramos el resultado en un json
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_FUENTE_FINANCIAMIENTO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutFuenteFinEstado = async (req, res) => {
  try {

    const { id, estado } = req.body;
    const resultado = await financiamientosModel.putFuenteFinEstado(id, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "El estado se cambio correctamente", estado: 2 } });
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningúna Fuente de Financiamiento", estado: 1 } });
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_FUENTE_FINANCIAMIENTO_ESTADO');
  }
}

module.exports = { ctrGetTiposFinanciamientos, ctrGetTiposFinanciamientosDesactivados, ctrGetFuentesFinanciamientos, ctrGetFuentesFinanciamientosDesactivados, ctrGetTipoFinById, ctrPostTipoFin, ctrPutTipoFin, ctrPutTipoFinEstado, ctrGetFuenteFinById, ctrPostFuenteFin, ctrPutFuenteFin, ctrPutFuenteFinEstado };//TODO: Exportamos las funciones del controlador