const { handleHttpError } = require('../utils/handleError');
const { tokenVerify } = require('../utils/handlejwt');
const { usuariosModel } = require('../models/index.model');//TODO: Importamos las funciones de los modelos de usuarios
const authMiddleware = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, "NO_HAY_TOKEN", 401);
      return
    }
    const token = req.headers.authorization.split(' ').pop();//TODO: Obtenemos el token almacenado en el header, luego hacemos un split para separarlo por espacios y tomamos el ultimo valor del array
    const dataToken = await tokenVerify(token);
    if (!dataToken.id) {
      handleHttpError(res, "ERROR_ID_TOKEN", 401);
      return
    }
    const user=await usuariosModel.getUsuarioID(dataToken.id)
    req.user=user
    next();
  } catch (error) {
    handleHttpError(res, "¡¡¡Sin Autorización!!!", 401);
  }
}
module.exports = { authMiddleware };//TODO: Exportamos las funciones




