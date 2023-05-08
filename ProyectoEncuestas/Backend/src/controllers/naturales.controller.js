const { naturalesModel } = require('../models/index.model');//TODO: Importamos el modelo de Naturales
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetBosques = async (req, res) => {//TODO: Controlador para hacer get a los bosques
  try {
    naturalesModel.getBosques().then(results => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_SUELOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }

}
const ctrGetBosquesDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Bosques Desactivados
  try {
    naturalesModel.getBosquesDesactivados().then(results => {//TODO: Ejecutamos la funcion getSuelos del modelo
      res.json({ results })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_SUELOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetSuelos = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Suelos
  try {
    naturalesModel.getSuelos().then(results => {//TODO: Ejecutamos la funcion getSuelosDesactivados del modelo
      res.json({ results })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_SUELOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetSuelosDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Tipos de Suelos Desactivados
  try {
    naturalesModel.getSuelosDesactivados().then(results => {//TODO: Ejecutamos la funcion getSUELOS del modelo
      res.json({ results })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_SUELOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
//Bosques
const ctrGetBosqueById = async (req, res) => {
  try {
    const { id } = req.body;
    await naturalesModel.getBosque(id).then(results => {
      res.json({ results })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_BOSQUE');
  }
}
const ctrPostBosque = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { bosque, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await naturalesModel.postBosque(bosque, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Bosque Agregado Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Bosque con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_BOSQUE');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutBosque = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { id, bosque } = req.body;//TODO: Extraemos los datos del body
    const resultado = await naturalesModel.putBosque(id, bosque);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Bosque editado exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Bosque con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún Bosque", estado: 1 } });//TODO: Mostramos el resultado en un json
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_BOSQUE');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutBosqueEstado = async (req, res) => {
  try {

    const { id, estado } = req.body;
    const resultado = await naturalesModel.putBosqueEstado(id, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "El estado se cambio correctamente", estado: 2 } });
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún Bosque", estado: 1 } });
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_BOSQUE_ESTADO');
  }
}
//Suelos
const ctrGetSueloById = async (req, res) => {
  try {
    const { id } = req.body;
    await naturalesModel.getSuelo(id).then(results => {
      res.json({ results })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_SUELO');
  }
}
const ctrPostSuelo = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { suelo, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await naturalesModel.postSuelo(suelo, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Tipo de Suelo Agregado Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Tipo de Suelo con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_SUELO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutSuelo = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { id, suelo } = req.body;//TODO: Extraemos los datos del body
    const resultado = await naturalesModel.putSuelo(id, suelo);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Tipo de Suelo editado exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Tipo de Suelo con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún Tipo de Suelo", estado: 1 } });//TODO: Mostramos el resultado en un json
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_SUELO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutSueloEstado = async (req, res) => {
  try {

    const { id, estado } = req.body;
    const resultado = await naturalesModel.putSueloEstado(id, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "El estado se cambio correctamente", estado: 2 } });
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún Tipo de Suelo", estado: 1 } });
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_SUELO_ESTADO');
  }
}
module.exports = { ctrGetBosques, ctrGetBosquesDesactivados, ctrGetSuelos, ctrGetSuelosDesactivados, ctrGetBosqueById, ctrPostBosque, ctrPutBosque, ctrPutBosqueEstado, ctrGetSueloById, ctrPostSuelo, ctrPutSuelo, ctrPutSueloEstado };//TODO: Exportamos las funciones del controlador