const { authModel } = require('../models/index.model');//TODO: Importamos las funciones de los modelos de usuarios
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const { compare } = require('../utils/handleBcrypt');
const { tokenSign } = require('../utils/handlejwt');
/**
 * TODO: Este Controlador se encargará de manejar las peticiones de login
 * @param {*} req 
 * @param {*} res 
 */
const ctrLogin = async (req, res) => {//TODO: Creamos la función que se encargará de crear un usuario
  try {
    const { email, password } = req.body;//TODO: Extraemos los datos del body
    //console.log(req.params.dni)
    const consulta = await authModel.login(email);
    if (consulta.recordset.length === 0) {
      res.json({results:{token:"400"}});
      return
    }
    const hashPassword = consulta.recordset[0].password;
    const passwordPlain = (password);
    const check = await compare(passwordPlain, hashPassword);
    if (!check) {
      res.json({results:{token:"400"}});
      return
    }
    consulta.recordset[0].password = undefined;

    const results = {
      token: await tokenSign(consulta.recordset[0])
    };
    res.send({ results })
  } catch (error) {
    handleHttpError(res, `ERROR_CREAR_${error}`);
    console.log(error);
  }
};
module.exports = { ctrLogin };//TODO: Exportamos las funciones
