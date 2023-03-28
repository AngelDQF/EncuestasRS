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
const ctrGetCargoById = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    const {id}=req.params;
    cargoModel.getCargo(id).then(result => {//TODO: Ejecutamos la funcion getEjes del modelo
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
const ctrPostCargo = async (req, res) => {//TODO: Funcion para hacer post a un eje
  try {//TODO: Intentamos ejecutar el codigo

    const { cargo, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await cargoModel.postCargos(cargo, estado);//TODO: Llamamos a la función del modelo para crear un usuario
    if (resultado == true) {
      res.json({ info: "Cargo Agregado", estado: resultado });//TODO: Mostramos el resultado en un json
    } else if (resultado == false) {
      res.json({ info: "Ya Existe un Cargo con ese nombre", estado: resultado });//TODO: Mostramos el resultado en un json
    } else {
      res.json({
        error: "Ha Ocurrido un error"
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_CARGO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
module.exports = { ctrGetCargos,ctrGetCargosDesactivados,ctrGetCargoById,ctrPostCargo };//TODO: Exportamos las funciones del controlador