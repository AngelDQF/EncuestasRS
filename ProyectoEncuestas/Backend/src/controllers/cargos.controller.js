const { cargoModel } = require('../models/index.model');//TODO: Importamos el modelo de ejes
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetCargos = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    cargoModel.getCargos().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_CARGOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }

}
const ctrGetCargosDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    cargoModel.getCargosDesactivados().then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
      res.json({results:result})//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_CARGOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }

}
module.exports = { ctrGetCargos,ctrGetCargosDesactivados };//TODO: Exportamos las funciones del controlador