const { usuariosModel } = require('../models/index.model');//TODO: Importamos las funciones de los modelos de usuarios
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const variable = 'USUARIO';//TODO: Variable para el manejo de errores
const { encrypt, compare } = require('../utils/handleBcrypt');//TODO: Importamos las funciones de encriptación y comparación de contraseñas
const { tokenSign } = require('../utils/handlejwt');//TODO: Importamos las funciones para firmar y verificar el token
const ctrPostUsuario = async (req, res) => {//TODO: Creamos la función que se encargará de crear un usuario
  try {
    const { nombre, telefono, dni, correo, contra, estado, tipo, sexo } = req.body;//TODO: Extraemos los datos del body
    //console.log(req.params.dni)
    const consulta = await usuariosModel.verificarDNI(dni);
    const consulta2 = await usuariosModel.verificarEmail(correo);
    if (consulta) {
      if (consulta2) {
        const eContra = await encrypt(contra);//TODO: Encriptamos la contraseña
        const consulta = await usuariosModel.postUsuario(nombre, telefono, dni, correo, eContra, estado, tipo, sexo);//TODO: Llamamos a la función del modelo para crear un usuario
        const data = {
          token: await tokenSign(consulta),
          user: consulta
        }
        res.send({ data });
      } else {
        res.json({ mensaje: "Ya existe un usuario con ese correo" })
      }
    }
    else {
      res.json({ mensaje: "Ya existe un usuario con esa DNI" })
    }
  } catch (error) {
    handleHttpError(res, `ERROR_CREAR_${variable}`);
    console.log(error);
  }
};
const ctrLogin = async (req, res) => {//TODO: Creamos la función que se encargará de crear un usuario
  try {


  } catch (error) {
    handleHttpError(res, `ERROR_LOGEO_${variable}`);

  }
}
module.exports = { ctrPostUsuario, ctrLogin };//TODO: Exportamos las funciones
