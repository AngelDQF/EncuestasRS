const { usuariosModel, encuestasModel } = require('../models/index.model');//TODO: Importamos las funciones de los modelos de usuarios
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const { encrypt } = require('../utils/handleBcrypt');//TODO: Importamos las funciones de encriptación y comparación de contraseñas
const { tokenSign } = require('../utils/handlejwt');//TODO: Importamos las funciones para firmar y verificar el token
require("dotenv").config();//TODO: Importamos dotenv para poder usar las variables de entorno
/**
 * Obtener un Registro
 * @param {*} req 
 * @param {*} res 
 */
const ctrGetUsuarios = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const { user } = req;
    usuariosModel.getUsuarios().then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({ results: result, user: user });//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_USUARIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);
  }
};
const ctrGetUsuarioByID = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const { id } = req.body;
    usuariosModel.getUsuarioID(id).then(results => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({ results });//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_USUARIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
};
const ctrPutUsuariosEstado = async (req, res) => {
  try {
    const { id, estado } = req.body;
    const resultado = await usuariosModel.putUsuarioEstado(id, estado);
    if (resultado == "exito") {
      res.json({ results: { mensaje: "El estado del usuario se cambio exitosamente", estado: 2 } })
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Usuario no encontrado", estado: 1 } })
    }
    else {
      res.json({ results: { mensaje: "Error al cambiar el estado del usuario", estado: 3 } })
    }
  } catch (error) {
    handleHttpError(res, 'Error al cambiar estado');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutRestablecerContraseña = async (req, res) => {
  try {
    const { id, password } = req.body;
    const eContra = await encrypt(password);//TODO: Encriptamos la contraseña
    const consulta=await usuariosModel.putRestablecerContraseña(id, eContra);
    if(consulta==="exito"){
      res.json({results:{mensaje:"Contraseña restablecida exitosamente",estado:2}})
    }else{
      res.json({results:{mensaje:"Error al cambiar la contraseña",estado:1}})
    }
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_USUARIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);
  }
}
const ctrGetUsuariosDesactivados = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    usuariosModel.getUsuariosDesactivados().then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({ results: result });//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_USUARIOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
};
const ctrGetUsuariosTipos = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    usuariosModel.getUsuariosTipos().then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({ results: result });//TODO: Mostramos el resultado en un json
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
         await usuariosModel.postUsuario(nombre, telefono, dni, correo, eContra, estado, tipo, sexo);//TODO: Llamamos a la función del modelo para crear un usuario
         res.json({ results: { mensaje: "Usuario Creado Exitosamente", estado: 2 } })

      } else {
        res.json({ results: { mensaje: "Ya existe un usuario con ese correo", estado: 1 } })
        return
      }
    }
    else {
      res.json({ results: { mensaje: "Ya existe un usuario con esa DNI", estado: 1 } })
      return
    }
  } catch (error) {
    handleHttpError(res, `ERROR_CREAR_USUARIO`);
    console.log(error);
  }
};
const ctrGetAsignaciones = async (req, res) => {
  try {
    const { id } = req.body;
    usuariosModel.getAsignaciones(id).then(results => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({ results });//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_ASIGNACIONES');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetAsignacionByID = async (req, res) => {
  try {
    const { id } = req.body;
    usuariosModel.getAsignacionByID(id).then(results => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({ results });//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_ASIGNACIONES');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutEstadoAsignacion = async (req, res) => {
  try {
    const { id, estado } = req.body;
    const resultado = usuariosModel.putEstadoAsignacion(id, estado);
    if (resultado == "exito") {
      res.json({ results: { mensaje: "El estado del usuario se cambio exitosamente", estado: 2 } })
    } else {
      res.json({ results: { mensaje: "Error al cambiar el estado del usuario", estado: 3 } })
    }
  } catch (error) {
    handleHttpError(res, 'ERROR_PUT_ESTADO_ASIGNACIÓN');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPostAsignacion = async (req, res) => {
  try {
    const {id,mun,estado}=req.body;
    const resultado = await usuariosModel.postAsignacion(id,mun,estado);
    if (resultado == "exito") {
      res.json({ results: { mensaje: "Se asignó el municipio exitosamente", estado: 2 } })
    } else {
      res.json({ results: { mensaje: "Error al asignar el municipio", estado: 3 } })
    }
  } catch (error) {
    handleHttpError(res, 'ERROR_POST_ASIGNACIÓN');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}

module.exports = { ctrGetUsuariosDesactivados, ctrGetUsuarios, ctrGetUsuariosTipos, ctrPostUsuario, ctrGetUsuarioByID, ctrPutUsuariosEstado, ctrPutRestablecerContraseña, ctrGetAsignaciones, ctrGetAsignacionByID, ctrPutEstadoAsignacion, ctrPostAsignacion };//TODO: Exportamos las funcione