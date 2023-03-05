const { validationResult }=require('express-validator');//TODO: Importamos el metodo validationResult de express-validators
const validationResults=(req,res,next)=>{//TODO: Creamos una función que se encargará de validar los datos
  try{//TODO: Intentamos ejecutar el codigo
    validationResult(req).throw();//TODO: Si hay errores, lanza una excepción
    return next();//TODO: Continua hacia el controlador
  }catch(error){
    res.status(403);//TODO: Si hay errores, envía un código de error, 403 Forbidden (accion denegada)
    res.send({errors:error.array()})//TODO: Envía un mensaje de error
  }
}

module.exports={validationResults}//TODO: Exportamos la función