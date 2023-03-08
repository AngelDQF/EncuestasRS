const pool = require('./config.model');// TODO: Importamos el archivo de configuración
/**
 * TODO: Funcion para obtener todos los Tipos de Financiamientos de la base de datos
 * @returns 
 */
async function getTiposFinanciamientos() {//TODO: Creamos la función que se encargará de listar todos los Tipos de Financiamientos
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Financiamientos_Listar_Tipos");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Tipos de Financiamientos agregados"
    }
    //console.log(result.recordsets);
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getTiposFinanciamientosDesactivados() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Financiamientos_Listar_Tipos_Desactivados");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Tipos de Financiamientos Desactivados"
    }
    pool.close();//TODO: Cerramos la conexión
  } catch (error) {
    console.log(error);
  }
}
async function getFuentesFinanciamientos() {//TODO: Creamos la función que se encargará de listar todos los Fuentes de Financiamientos
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Financiamientos_Listar_Fuentes");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Fuentes de Financiamientos agregados"
    }
    //console.log(result.recordsets);
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getFuentesFinanciamientosDesactivados() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Financiamientos_Listar_Fuentes_Desactivadas");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Fuentes de Financiamientos Desactivados"
    }
    pool.close();//TODO: Cerramos la conexión
  } catch (error) {
    console.log(error);
  }
}
module.exports = { getTiposFinanciamientos, getTiposFinanciamientosDesactivados, getFuentesFinanciamientos, getFuentesFinanciamientosDesactivados };//TODO: Exportamos las funcionessss