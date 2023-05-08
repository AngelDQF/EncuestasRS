let pool = require('./config.model');// TODO: Importamos el archivo de configuración
/**
 * Modelo para obtener todos los usuarios
 */
async function getUsuarios() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Usuarios_Listar");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    return result.recordset;//TODO: Retornamos los datos

  } catch (error) {
    console.log(error);

  }
}
async function getUsuarioID(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Usuarios_Buscar_ID '${id}'`);
    if (result.recordset.length !== 0) {
      return result.recordset
    } else {
      return "Usuario no encontrado"
    }
  }
  catch (error) {
    console.log(error);
  }
}
async function verificarUserByID(id) {//TODO: Función para verificar si el DNI ya existe
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Usuarios_Buscar_ID '${id}'`);//TODO: Ejecutamos la consulta
    return result.recordset.length === 0;//TODO: Retornamos el resultado
  }
  catch (error) {
    console.log(error);//TODO: Mostramos el error
  }
}
async function putUsuarioEstado(id, estado) {
  try {
    const consulta = await verificarUserByID(id);
    if (!consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Usuarios_Cambiar_Estado '${id}', '${estado}'`);
      return "exito";
    } else {
      return "ambiguo";
    }
  }
  catch (error) {
    return "error"
  }
};
async function putRestablecerContraseña(id, password) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    await pool.request().query(`Exec prc_Usuarios_Restablecer_Passsword ${id}, '${password}'`);
    return "exito"
  }
  catch (error) {
    console.log(error);
    return "error"
  }
};
async function getUsuariosDesactivados() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Usuarios_Listar_Desactivados");//TODO: Ejecutamos la consulta
    return result.recordset;//TODO: Retornamos los datos

  } catch (error) {
    console.log(error);
  }
}
async function getUsuariosTipos() {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Usuarios_Tipos_Listar");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    return result.recordset;//TODO: Retornamos los datos

  } catch (error) {
    console.log(error);
  }
}
/**
 * Modelo para obtener un usuario por DNI
 * @param {*} dni 
 * @returns 
 */
async function getUsuario(dni) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Usuarios_Buscar_DNI '${dni}'`);
    if (result.recordset.length !== 0) {
      return result.recordset
    } else {
      return "Usuario no encontrado"
    }
  }
  catch (error) {
    console.log(error);
  }
};
/**
 * Modelo para agregar un usuario
 * @param {*} nombre 
 * @param {*} telefono 
 * @param {*} dni 
 * @param {*} correo 
 * @param {*} contra 
 * @param {*} estado 
 * @param {*} tipo 
 * @param {*} sexo 
 * @returns 
 */
async function postUsuario(nombre, telefono, dni, correo, contra, estado, tipo, sexo) {//TODO: Función para crear un usuario
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    await pool.request().query(`Exec prc_Usuarios_Crear '${nombre}', '${telefono}', '${dni}', '${correo}', '${contra}', ${estado}, ${tipo}, ${sexo}`);
    return "Usuario creado";
  } catch (error) {
    console.log(error);
  }
};

async function verificarDNI(dni) {//TODO: Función para verificar si el DNI ya existe
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Usuarios_Buscar_DNI '${dni}'`);//TODO: Ejecutamos la consulta
    return result.recordset.length === 0;//TODO: Retornamos el resultado
  }
  catch (error) {
    console.log(error);//TODO: Mostramos el error
  }
}
async function verificarEmail(email) {//TODO: Función para verificar si el DNI ya existe
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Usuarios_Buscar_Email '${email}'`);//TODO: Ejecutamos la consulta
    return result.recordset.length === 0;//TODO: Retornamos el resultado
  }
  catch (error) {
    console.log(error);//TODO: Mostramos el error
  }
}
async function getAsignaciones(id) {
  try {
    await pool.connect();
    const result = await pool.request().query(`Exec prc_Usuarios_Asignaciones_Listar '${id}'`);
    if (result.recordset.length !== 0) {
      return result.recordset
    } else {
      return "Asignaciones no encontrado"
    }
  } catch (error) {
    console.log(error);
  }
}
async function postAsignacion(id,mun,estado){
  try {
    await pool.connect();
    await pool.request().query(`Exec prc_Usuarios_Asignaciones_Crear '${id}', '${mun}', ${estado}`);
    return "exito"
  } catch (error) {
    return "error"
  }
}
async function getAsignacionByID(id) {
  try {
    await pool.connect();
    const result = await pool.request().query(`Exec prc_Usuarios_Asignaciones_ID '${id}'`);
    if (result.recordset.length !== 0) {
      return result.recordset
    } else {
      return "Asignación no encontrado"
    }
  } catch (error) {
    console.log(error);
  }
}
async function putEstadoAsignacion(id, estado) {
  try {
    await pool.connect();
    await pool.request().query(`Exec prc_Usuarios_Asignaciones_Cambiar_Estado '${id}', ${estado}`);
    return "exito"
  } catch (error) {
    return "error"
  }
}

module.exports = { getUsuariosDesactivados, getUsuarios, getUsuario, getAsignaciones, postUsuario, verificarEmail, verificarDNI, getUsuariosTipos, getUsuarioID, putUsuarioEstado, putRestablecerContraseña, getAsignacionByID, putEstadoAsignacion,postAsignacion };//TODO: Exportamos las funciones que hemos creado