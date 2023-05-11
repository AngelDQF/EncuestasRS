let pool = require('./config.model');// TODO: Importamos el archivo de configuración

async function getReferenciasActas() {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Referencias_Actas");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay referencias agregadas"
    }
  } catch (error) {
    console.log(error);
    return "Error al listar las referencias"
  }
}
async function getReferenciaByEncuesta(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Referencia_Acta_Buscar '${id}'`);//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay referencias agregadas"
    }
  } catch (error) {
    console.log(error);
    return "Error al listar las referencias"
  }
}
async function getReferenciasActasByDep(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Referencia_Acta_Departamento '${id}'`);//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay referencias agregadas"
    }
  } catch (error) {
    console.log(error);
    return "Error al listar las referencias"
  }
}
async function getReferenciasDNI() {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Referencias_DNI");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay referencias agregadas"
    }
  } catch (error) {
    console.log(error);
    return "Error al listar las referencias"
  }
}
async function postReferenciaActa(uid, name, ext, tipo, id) {
  try {
    const consulta = await verificarReferenciaActa(id);
    if (consulta == true) {
      await pool.connect()
      await pool.request().query(`Exec prc_Referencia_Crear '${uid}', '${name}', '${ext}', ${tipo}, ${id}`);
      return "exito-post";
    } else {
      await pool.connect()
      await pool.request().query(`Exec prc_Referencia_Editar '${uid}', '${name}', '${ext}'`);
      return consulta;
    }
  } catch (error) {
    console.log(error);
    return "error"
  }
}
async function postReferenciaJunta( miembro, uid, name, ext, tipo, id) {
  try {
    const consulta = await verificarReferenciaJunta(miembro);
    if (consulta == true) {
      await pool.connect()
      let result = await pool.request().query(`Exec prc_Referencia_Crear '${uid}', '${name}', '${ext}', ${tipo}, ${id}`);
      let code=result.recordset[0].id
      await pool.request().query(`Exec prc_Referencia_Junta_Crear '${code}', '${miembro}', '${uid}'`);
      return "exito-post";
    } else {
      await pool.connect()
      await pool.request().query(`Exec prc_Referencia_Editar '${consulta}', '${name}', '${ext}'`);
      return consulta;
    }
  } catch (error) {
    console.log(error);
    return "error"
  }
}
async function verificarReferenciaActa(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Referencia_Acta_Buscar ${id}`);
    if (result.recordset.length === 0) {
      return true;
    } else {
      return result.recordset[0].uid;
    }
  }
  catch (error) {
    console.log(error);
  }
}
async function verificarReferenciaJunta(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Referencia_Junta_Buscar ${id}`);
    if (result.recordset.length === 0) {
      return true;
    } else {
      return result.recordset[0].uid;
    }
  }
  catch (error) {
    console.log(error);
  }
}
module.exports = { getReferenciasActas, getReferenciasDNI, postReferenciaActa, postReferenciaJunta, getReferenciasActasByDep, getReferenciaByEncuesta }