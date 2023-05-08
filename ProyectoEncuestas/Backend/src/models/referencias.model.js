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
async function postReferencia(uid, name, ext, tipo, id) {
  try {
    await pool.connect()
    await pool.request().query(`Exec prc_Referencia_Crear '${uid}', '${name}', '${ext}', ${tipo}, ${id}`);
    return "exito";
  } catch (error) {
    console.log(error);
    return "error"
  }
}
async function postReferenciaJunta(id_Ref, miembro, uid) {
  try {
    await pool.connect()
    await pool.request().query(`Exec prc_Referencia_Junta_Crear '${id_Ref}', '${miembro}', '${uid}'`);
    return "exito";
  } catch (error) {
    console.log(error);
    return "error"
  }
}
module.exports = { getReferenciasActas, getReferenciasDNI, postReferencia, postReferenciaJunta }