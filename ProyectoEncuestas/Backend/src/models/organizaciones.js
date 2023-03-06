let pool = require('./config.model');// TODO: Importamos el archivo de configuración
/**
 * Modelo para obtener todos los usuarios
 */
async function getTipoOrganizaciones() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Tipos_Organizaciones_Listar");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    return result.recordset;//TODO: Retornamos los datos
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function getTipoOrganizacionesDesactivadas() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Tipos_Organizaciones_Listar_Desactivados");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    return result.recordset;//TODO: Retornamos los datos
    pool.close();//TODO: Cerramos la conexiónsss

  } catch (error) {
    console.log(error);
    throw error;
  }
}
module.exports={getTipoOrganizaciones,getTipoOrganizacionesDesactivadas};//TODO: Exportamos las Funciones