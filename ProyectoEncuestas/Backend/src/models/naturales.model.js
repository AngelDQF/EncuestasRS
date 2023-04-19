let pool = require('./config.model');// TODO: Importamos el archivo de configuración

async function getBosques() {//TODO: Funcion para obtener todos los bosques
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Bosques_Listar");//TODO: Ejecutamos la consulta
    return result.recordset;//TODO: Retornamos los datos
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {//TODO: Si hay un error al ejecutar el codigo capturamos el error
    console.log(error);//TODO: Mostramos el error
  }
}
async function getBosquesDesactivados() {//TODO: Funcion para obtener todos los bosques desactivados
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Bosques_Listar_Desactivados");//TODO: Ejecutamos la consulta
    return result.recordset;//TODO: Retornamos los datos
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {//TODO: Si hay un error al ejecutar el codigo capturamos el error
    console.log(error);//TODO: Mostramos el error
  }
}
async function getSuelos() {//TODO: Funcion para obtener todos los tipos de suelos
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Suelos_Listar");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Tipos de Suelo Agregados"
    }    pool.close();//TODO: Cerramos la conexión

  } catch (error) {//TODO: Si hay un error al ejecutar el codigo capturamos el error
    console.log(error);//TODO: Mostramos el error
  }
}
async function getSuelosDesactivados() {//TODO: Funcion para obtener todos los tipos de suelos desactivados
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Suelos_Listar_Desactivados");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Tipos de Suelo Desactivados"
    } 
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {//TODO: Si hay un error al ejecutar el codigo capturamos el error
    console.log(error);//TODO: Mostramos el error
  }
}
module.exports = { getBosques, getBosquesDesactivados, getSuelos, getSuelosDesactivados };//TODO: Exportamos las Funciones