const pool = require('./config.model');// TODO: Importamos el archivo de configuración
async function postMesa(id) {
  try {
    await pool.connect()
    const consulta = await pool.request().query(`Exec prc_Mesa_Crear ${id}`);
    return consulta.recordset;
  } catch {
    return "error"
  }
}
async function postJuntaMesa(id, cargo, eje, dni, name, tel, sexo, edad, esc) {
  try {
    await pool.connect()
    await pool.request().query(`Exec prc_Mesa_Junta_Crear ${id},'${cargo}','${eje}','${id}','${dni}','${name}','${tel}','${sexo}','${edad}','${esc}'`);
    return "exito";
  } catch {
    return "error"
  }
}

async function verificarMesa(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Mesa_Buscar '${id}'`);
    pool.close();//TODO: Cerramos la conexión
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
module.exports = { postMesa, postJuntaMesa, verificarMesa }