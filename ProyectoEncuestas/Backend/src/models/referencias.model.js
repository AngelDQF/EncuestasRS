let pool = require('./config.model');// TODO: Importamos el archivo de configuración

async function getReferenciasActas() {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Referencias_Actas");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      pool.close();//TODO: Cerramos la conexión
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      pool.close();//TODO: Cerramos la conexión
      return "Vacio"
    }
  } catch (error) {
    console.log(error);
    return "Error"
  }
}

async function postReferencia(uid, name, ext, tipo, id) {
  try {
    await pool.connect()
    await pool.request().query(`Exec prc_Referencia_Crear '${uid}', '${name}', '${ext}', ${tipo}, ${id}`);
    pool.close();
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
    pool.close();
    return "exito";
  } catch (error) {
    console.log(error);
    return "error"
  }
}
module.exports = { getReferenciasActas,postReferencia, postReferenciaJunta }