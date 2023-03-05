const jwt = require('jsonwebtoken');//TODO: Importamos el modulo jsonwebtoken
const JWT_SECRET = process.env.JWT_SECRET;//TODO: Importamos la variable de entorno JWT_SECRET
const tokenSign = async (user) => {//TODO: Funcion para firmar el token
  const sign = jwt.sign(//TODO: Firmamos el token
    {
      id: user.id,
      tipo: user.tipo,
    },
    JWT_SECRET,
    {
      expiresIn: '1h'
    }
  );
  return sign;
}
/**
 * TODO: Debes de pasar el token de sesion, el token JWT
 * @param {*} tokenJwt 
 */
const tokenVerify = async (tokenJwt) => {//TODO: Funcion para verificar el token
  try {
    return jwt.verify(tokenJwt, JWT_SECRET);
  } catch (error) {
    return null;
  }
}
module.exports = { tokenSign, tokenVerify }