const { departamentosModel } = require('../models/index.model');//TODO: Importamos el modelo de ejes
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const variable="DEPARTAMENTO"
const ctrGetDepartamentos = async (req, res) => {//TODO: Funcion para hacer get a los ejes
  try {
    departamentosModel.getDepartamentos().then(result => {//TODO: Hacemos uso del metodo getEjes del modelo
      res.json(result);//TODO: Mostramos el resultado en un json
    });
  } catch{
    handleHttpError(res, `ERROR_LISTAR_${variable}S`);//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }

}
module.exports={ctrGetDepartamentos}//TODO: Exportamos la funcion	