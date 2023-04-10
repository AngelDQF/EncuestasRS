const { usuariosModel } = require('../models/index.model');//TODO: Importamos las funciones de los modelos de usuarios
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const { encrypt } = require('../utils/handleBcrypt');//TODO: Importamos las funciones de encriptación y comparación de contraseñas
const { tokenSign } = require('../utils/handlejwt');//TODO: Importamos las funciones para firmar y verificar el token

/**
 * Obtener un Registro
 * @param {*} req 
 * @param {*} res 
 */
const ctrGetUsuarios = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const {user}=req;
    usuariosModel.getUsuarios().then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({results:result,user:user});//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_USUARIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);
  }
};
const ctrGetUsuarioByID = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const {id}=req.body;
    usuariosModel.getUsuarioID(id).then(results => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({results});//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_USUARIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);ss
  }
};
const ctrPutUsuariosEstado = async (req,res)=>{
  try {
    const {id,estado}=req.body;
    usuariosModel.putUsuariosEstado(id,estado).then(results => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({results});//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_USUARIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);ss
  }
}
const ctrGetUsuariosDesactivados = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    usuariosModel.getUsuariosDesactivados().then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({results:result});//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_USUARIOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
};
const ctrGetUsuariosTipos = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    usuariosModel.getUsuariosTipos().then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({results:result});//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_LISTAR_TIPOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError

  }
};
/**
 * Obtener un Registro por DNI
 * @param {*} req 
 * @param {*} res 
 */
const ctrPostUsuario = async (req, res) => {//TODO: Creamos la función que se encargará de crear un usuario
  try {
    const { nombre, telefono, dni, correo, contra, estado, tipo, sexo } = req.body;//TODO: Extraemos los datos del body
    //console.log(req.params.dni)
    const dniVerify = await usuariosModel.verificarDNI(dni);
    const emailVerify = await usuariosModel.verificarEmail(correo);
    if (dniVerify) {//TODO: Verificamos que no exista un usuario con ese DNI
      if (emailVerify) {//TODO: Verificamos que no exista un usuario con ese correo
        const eContra = await encrypt(contra);//TODO: Encriptamos la contraseña
        const consulta = await usuariosModel.postUsuario(nombre, telefono, dni, correo, eContra, estado, tipo, sexo);//TODO: Llamamos a la función del modelo para crear un usuario

        res.send( consulta );
      } else {
        res.json({ mensaje: "Ya existe un usuario con ese correo" })
        return
      }
    }
    else{
      res.json({ mensaje: "Ya existe un usuario con esa DNI" })
      return
    }
  } catch (error) {
    handleHttpError(res, `ERROR_CREAR_USUARIO`);
    console.log(error);
  }
};
module.exports = { ctrGetUsuariosDesactivados,ctrGetUsuarios,ctrGetUsuariosTipos,ctrPostUsuario,ctrGetUsuarioByID,ctrPutUsuariosEstado};//TODO: Exportamos las funcionessss