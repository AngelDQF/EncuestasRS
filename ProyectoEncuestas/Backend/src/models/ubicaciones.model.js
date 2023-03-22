let pool = require('./config.model');// TODO: Importamos el archivo de configuración

async function getDepartamentos(){
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("Select * from vew_Departamentos_Listar");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Departamentos Agregados"
    }
     pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getDepartamentoByName(dep){
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Departamentos_Buscar '${dep}'`);//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Departamentos Agregados"
    }
     pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getMunicipios(){
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("Select * from vew_Municipios_Listar");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Municipios Agregados"
    }
     pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getMunicipiosByName(mun){
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Municipios_Buscar '${mun}'`);//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Municipios Agregados"
    }
     pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getAldeas(){
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("Select * from vew_Aldeas_Listar");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Aldeas Agregados"
    }
     pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getAldeasByName(aldea){
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Aldeas_Buscar '${aldea}'`);//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Aldeas Agregados"
    }
     pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getCaserios(){
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("Select * from vew_Caserios_Listar");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Aldeas Agregados"
    }
     pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getCaserioByName(caserio){
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Caserios_Buscar '${caserio}'`);//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Caserios Agregados"
    }
     pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
module.exports={getDepartamentos,getMunicipios,getMunicipiosByName,getAldeas,getCaserios,getCaserioByName,getDepartamentoByName,getAldeasByName};//TODO: Exportamos las funciones