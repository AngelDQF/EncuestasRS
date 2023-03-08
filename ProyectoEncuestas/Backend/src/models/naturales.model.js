let pool = require('./config.model');// TODO: Importamos el archivo de configuración

async function getBosques() {//TODO: Funcion para obtener todos los bosques
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Bosques_Listar");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    return result.recordset;//TODO: Retornamos los datos
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getBosquesDesactivados() {//TODO: Funcion para obtener todos los bosques desactivados
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Bosques_Listar_Desactivados");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    return result.recordset;//TODO: Retornamos los datos
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
module.exports = { getBosques, getBosquesDesactivados };//TODO: Exportamos las Funciones