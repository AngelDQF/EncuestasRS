const pool = require('./config.model');
async function getGrados() {
  try {
    await pool.connect()
    let result = await pool.request().query("Exec prc_Escolaridad_Listar");

    if (result.recordset.length !== 0) {
      return result.recordset;
    }
    else {
      return "No hay grados de escolaridad agregados"
    }
  } catch (error) {
    console.log(error);
  }
}
async function getGradosDesactivados() {
  try {
    await pool.connect()
    let result = await pool.request().query("Exec prc_Escolaridad_Listar_Desactivados");

    if (result.recordset.length !== 0) {
      return result.recordset;
    }
    else {
      return "No hay grados de escolaridad desactivados"
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {getGrados,getGradosDesactivados};