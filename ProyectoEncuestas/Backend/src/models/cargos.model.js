const pool = require('./config.model');// TODO: Importamos el archivo de configuración
/**
 * TODO: Funcion para obtener todos los ejes de la base de datos
 * @returns 
 */
async function getCargos() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Cargos_Listar");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    return result.recordset;//TODO: Retornamos los datos
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = { getCargos };//TODO: Exportamos las funcionessss