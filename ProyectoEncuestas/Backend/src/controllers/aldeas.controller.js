const { aldeasModel } = require('../models/index.model');//TODO: Importamos el modelo de ejes
const variable="ALDEA"

const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const ctrGetAldeas = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    aldeasModel.getAldeas().then(result => {//TODO: Ejecutamos la funcion getAldeas del modelo
      res.json(result);//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, `ERROR_LISTAR_${variable}S`);//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetAldea = async (req, res) => {//TODO: Funcion para hacer get a un eje
  try {
    const { aldea } = req.params;//TODO: Extraemos el dni del parámetro
    const resultado = await aldeasModel.getAldea(aldea);//TODO: Llamamos a la función del modelo para obtener un usuario
    res.json(resultado);//TODO: Mostramos el resultado en un json
  }
  catch{
    handleHttpError(res,`ERROR_LISTAR_${variable}`);//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}


module.exports={ctrGetAldeas,ctrGetAldea}