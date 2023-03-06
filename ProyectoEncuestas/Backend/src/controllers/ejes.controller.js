const { ejesModel } = require('../models/index.model');//TODO: Importamos el modelo de ejes
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetEjes = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    ejesModel.getEjes().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_EJES');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }

}
const ctrGetEjesDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    ejesModel.getEjesDesactivados().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_EJES_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }

}
/**
 * TODO: Creacion del controlador para listar un eje por su nombre
 * @param {*} req 
 * @param {*} res 
 */
const ctrGetEje = async (req, res) => {//TODO: Funcion para hacer get a un eje
  try {
    const { eje } = req.params;//TODO: Extraemos el dni del parámetro
    const resultado = await ejesModel.getEje(eje);//TODO: Llamamos a la función del modelo para obtener un usuario
    res.json(resultado);//TODO: Mostramos el resultado en un json
  }
  catch{
    handleHttpError(res, 'ERROR_LISTAR_EJE');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
/**
 * TODO: Creacion del controlador para crear un eje
 * @param {*} req 
 * @param {*} res 
 */
const ctrPostEje = async (req, res) => {//TODO: Funcion para hacer post a un eje
  try {//TODO: Intentamos ejecutar el codigo

    const { eje, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await ejesModel.postEjes(eje, estado);//TODO: Llamamos a la función del modelo para crear un usuario
    res.json(resultado);//TODO: Mostramos el resultado en un json

  } catch{
    handleHttpError(res, 'ERROR_POST_EJES');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
/**
 * TODO: Creacion del controlador para actualizar un eje
 * @param {*} req 
 * @param {*} res 
 */
const ctrPutEje = async (req, res) => {//TODO: Funcion para hacer put a un eje
  try {//TODO: Intentamos ejecutar el codigo
    const { id, eje } = req.body;//TODO: Extraemos los datos del body
    const resultado = await ejesModel.putEjeNombre(id, eje);//TODO: Llamamos a la función del modelo para crear un usuario
    res.json(resultado);//TODO: Mostramos el resultado en un json
  } catch{
    handleHttpError(res, 'ERROR_UPDATE_EJE');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
/**
 * TODO: Creacion del controlador para actualizar el eje de un estado ("Eliminar")
 * @param {*} req 
 * @param {*} res 
 */
const ctrPutEjeEstado = async (req, res) => {//TODO: Funcion para hacer put a un eje
  try {//TODO: Intentamos ejecutar el codigo
    const { id, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await ejesModel.putEjeEstado(id, estado);//TODO: Llamamos a la función del modelo para crear un usuario
    res.json(resultado);//TODO: Mostramos el resultado en un json
  } catch{
    handleHttpError(res, 'ERROR_UPDATE_EJE_ESTADO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
module.exports = { ctrGetEjes, ctrGetEjesDesactivados,ctrGetEje, ctrPostEje, ctrPutEje, ctrPutEjeEstado };//TODO: Exportamos las funciones del controlador