const jwt = require('jsonwebtoken');//TODO: Importamos el modulo jsonwebtoken
const JWT_SECRET = process.env.JWT_SECRET;//TODO: Importamos la variable de entorno JWT_SECRET
const tokenSign = async (user) => {//TODO: Funcion para firmar el token
  const sign = jwt.sign(//TODO: Firmamos el token
    {
      id: user.id,//TODO: Pasamos el id del usuario
      tipo: user.tipo,//TODO: Pasamos el tipo de usuario
    },
    JWT_SECRET,//TODO: Pasamos la variable de entorno JWT_SECRET
    {
      expiresIn: '2h'//TODO: Pasamos el tiempo de expiracion del token
    }
  );
  return sign;//TODO: Retornamos el token firmado
}
/**
 * TODO: Debes de pasar el token de sesion, el token JWT
 * @param {*} tokenJwt 
 */
const tokenVerify = async (tokenJwt) => {//TODO: Funcion para verificar el token
  try {//TODO: Intentamos verificar el token
    return jwt.verify(tokenJwt, JWT_SECRET);//TODO: Si el tokenn es valido retornamos el token verificado
  } catch (error) {//TODO: Si el token no es valido
    return null;//TODO: Retornamos null
  }
}
module.exports = { tokenSign, tokenVerify }//TODO: Exportamos las funciones