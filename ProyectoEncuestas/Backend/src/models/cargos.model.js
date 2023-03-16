const pool = require('./config.model');// TODO: Importamos el archivo de configuración
/**
 * TODO: Funcion para obtener todos los cargos de la base de datos
 * @returns 
 */
async function getCargos() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Cargos_Listar");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Cargos agregados"
    }
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getCargo(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Cargos_Buscar ${id}`);
    if(result.recordset.length!==0){
      return await result.recordset
    }else{
      return "Cargo no encontrado"
    }
  }
  catch (error) {
    console.log(error);
  }
};
async function getCargosDesactivados() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Cargos_Listar_Desactivados");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Tipos de Cargos Desactivados"
    }
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
module.exports = { getCargos,getCargo, getCargosDesactivados };//TODO: Exportamos las funcionessss