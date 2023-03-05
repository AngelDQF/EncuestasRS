const { usuariosModel } = require('../models/index.model');//TODO: Importamos las funciones de los modelos de usuarios
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
/**
 * Obtener un Registro
 * @param {*} req 
 * @param {*} res 
 */
const ctrGetUsuarios = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    usuariosModel.getUsuarios().then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({results:result});//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_USUARIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);
  }
};
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
const ctrGetUsuario = async (req, res) => {//TODO: Creamos la función que se encargará de obtener un usuario por DNI
  try {
    const { dni } = req.params;//TODO: Extraemos el dni del parámetro
    const resultado=await usuariosModel.getUsuario(dni);//TODO: Llamamos a la función del modelo para obtener el usuario creado
    res.json(resultado);
  }
  catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_LISTAR_USUARIO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
};
const ctrPostAsignaciones = (res, req) => {

}
module.exports = { ctrGetUsuariosDesactivados,ctrGetUsuarios, ctrGetUsuario, ctrPostAsignaciones,ctrGetUsuariosTipos};//TODO: Exportamos las funcionessss