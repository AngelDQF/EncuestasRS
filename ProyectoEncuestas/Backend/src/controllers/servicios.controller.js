const { serviciosModel } = require('../models/index.model');//TODO: Importamos el modelo de ejes
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const ctrGetServiciosLocales = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    serviciosModel.getServiciosLocales().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_SERVICIOS_LOCALES');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetServiciosLocalesDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    serviciosModel.getServiciosLocalesDesactivadas().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_SERVICIOS_LOCALES_DESACTIVADAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutServicioLocal = async (req, res) => {
  try {
    const { id, est } = req.body;
    serviciosModel.putEstadoServicioLocal(id, est).then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_ACTUALIZAR_SERVICIO_BASICO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetServiciosBasicos = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    serviciosModel.getServiciosBasicos().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_SERVICIOS_BASICOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetServiciosBasicosDesactivados = async (req, res) => {//TODO: Funcion para hacer get a las Servicios Desactivadas
  try {
    serviciosModel.getServiciosBasicosDesactivados().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_SERVICIOS_BASICOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}

const ctrGetServicioById = async (req, res) => {
  try {
    const { id } = req.body;
    serviciosModel.getServicio(id).then(results => {
      res.json({ results })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_SERVICIO');
  }
}
const ctrPostServicio = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo

    const { tipo, servicio, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await serviciosModel.postServicio(tipo, servicio, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Servicio Agregado Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe una Servicio con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_SERVICIO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutServicio = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo

    const { id, servicio, tipo } = req.body;//TODO: Extraemos los datos del body
    const resultado = await serviciosModel.putServicio(id, servicio, tipo);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Servicio editado exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Servicio con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún Servicio", estado: 1 } });//TODO: Mostramos el resultado en un json
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_SERVICIO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutServicioDatos = async (req, res) => {
  try {
    const { id, tipo, social } = req.body;
    const resultado = await serviciosModel.putOrgDatos(id, tipo, social);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Servicio editado exitosamente", estado: 2 } });
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún Servicio", estado: 1 } });
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_ORGANIZACIÓN');
  }
}
const ctrPutServicioEstado = async (req, res) => {
  try {

    const { id, estado } = req.body;
    const resultado = await serviciosModel.putOrgEstado(id, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "El estado se cambio correctamente", estado: 2 } });
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningúna Servicio", estado: 1 } });
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_ORGANIZACIÓN_ESTADO');
  }
}
module.exports = { ctrGetServiciosLocales, ctrGetServiciosLocalesDesactivados, ctrGetServiciosBasicos, ctrGetServiciosBasicosDesactivados, ctrPutServicioLocal, ctrGetServicioById, ctrPostServicio, ctrPutServicio, ctrPutServicioDatos, ctrPutServicioEstado };//TODO: Exportamos las funciones del controlador