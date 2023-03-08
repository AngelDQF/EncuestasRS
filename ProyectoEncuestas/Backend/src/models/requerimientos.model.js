const pool = require('./config.model');// TODO: Importamos el archivo de configuración

async function getMercados() {//TODO: Creamos la función que se encargará de listar todos Mercados
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Mercados_Listar");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Tipos de Mercados agregados"
    }
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getMercadosDesactivados() {//TODO: Función para obtener todos los Mercados Desactivados
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Mercados_Listar_Desactivados");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Tipos de Mercados Desactivados"
    }
    pool.close();//TODO: Cerramos la conexión
  } catch (error) {
    console.log(error);
  }
}
async function getUsosTierra() {//TODO: Creamos la función que se encargará de listar todos los Fuentes de Financiamientos
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Tierras_Usos_Listar");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Usos de Tierra agregados"
    }
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getUsosTierraDesactivados() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Tierras_Usos_Listar_Desactivados");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Usos de Tierra Desactivados"
    }
    pool.close();//TODO: Cerramos la conexión
  } catch (error) {
    console.log(error);
  }
}
async function getEstructuras() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Estructuras_Listar");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Estructuras Agregadas"
    }
    pool.close();//TODO: Cerramos la conexión
  } catch (error) {
    console.log(error);
  }
}
async function getEstructurasDesactivados() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Estructuras_Listar_Desactivados");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Estructuras Desactivados"
    }
    pool.close();//TODO: Cerramos la conexión
  } catch (error) {
    console.log(error);
  }
}
async function getTenenciaTierra() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Tierras_Tenencia_Listar");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Tipos de Tenencia Tierra Agregadas"
    }
    pool.close();//TODO: Cerramos la conexión
  } catch (error) {
    console.log(error);
  }
}
async function getTenenciaTierraDesactivados() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Tierras_Tenencia_Listar_Desactivados");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Tipos de Tenencia Tierra Desactivados"
    }
    pool.close();//TODO: Cerramos la conexión
  } catch (error) {
    console.log(error);
  }
}
module.exports = {getMercados,getMercadosDesactivados,getUsosTierra,getUsosTierraDesactivados,getTenenciaTierra,getTenenciaTierraDesactivados,getEstructuras,getEstructurasDesactivados};//TODO: Exportamos las funcionessss