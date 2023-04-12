
const handleHttpError = (res,message='Algo Sucedio',code=403) => {//TODO: Funcion para manejar los errores
  res.send({error:message});//TODO: Enviamos un mensaje de error
}
module.exports={handleHttpError}