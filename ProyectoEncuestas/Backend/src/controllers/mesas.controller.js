const { mesasModel } = require('../models/index.model');
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const ctrPostMesa=async(res,req)=>{
  try {
    
  } catch (error) {
    handleHttpError(res, 'ERROR_CREAR_MESA_SOLIDARIA');
  }
};

module.exports={ctrPostMesa};