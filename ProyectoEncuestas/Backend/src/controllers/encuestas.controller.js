const { encuestasModel } = require('../models/index.model');//TODO: Importamos el modelo de Naturales
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetEncuestas = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    encuestasModel.getEncuestas().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_TIPOS_FINANCIAMIENTOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetDepartamentosUsuario = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const {id}=req.body
    encuestasModel.getDepartamentosUsuario(id).then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({results:result});//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_DEPARTAMENTOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);
  }
};
module.exports = { ctrGetEncuestas,ctrGetDepartamentosUsuario };//TODO: Exportamos las funciones del controlador