
const handleHttpError = (res,message='Algo Sucedio',code=403) => {//TODO: Funcion para manejar los errores
  res.send({results:{mensaje:message,estado:3}});//TODO: Enviamos un mensaje de error
}
module.exports={handleHttpError}