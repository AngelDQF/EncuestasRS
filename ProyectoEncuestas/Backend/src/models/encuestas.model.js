const pool = require('./config.model');// TODO: Importamos el archivo de configuración
/**
 * TODO: Funcion para obtener todos los ejes de la base de datos
 * @returns 
 */
async function getEncuestas() {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("Exec prc_Encuestas_Listar");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Encuestas agregadas"
    }
    //console.log(result.recordsets);
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}

async function getDepartamentosUsuario(id) {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Encuestas_Departamentos ${id}`);//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "El usuario no tiene departamentos agregados"
    }
    //console.log(result.recordsets);
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getMunicipiosUsuario(user,dep) {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Encuestas_Municipios ${user},'${dep}'`);//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "El usuario no tiene Municipios agregados"
    }
    //console.log(result.recordsets);
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getAldeasUsuario(id) {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Encuestas_Aldeas '${id}'`);//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "El usuario no tiene aldeas agregados"
    }
    //console.log(result.recordsets);
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getCaseriosUsuario(id) {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Encuestas_Caserios '${id}'`);//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "El usuario no tiene caserios agregados"
    }
    //console.log(result.recordsets);
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getOrganizacion() {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("Select * from vew_Encuestas_Organizacion");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Organizaciones Agregadas"
    }
    //console.log(result.recordsets);
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getOrganizacionesSociales() {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("Select * from vew_Encuestas_Organizaciones_Sociales");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Organizaciones Agregadas"
    }
    //console.log(result.recordsets);
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
module.exports = { getEncuestas,getDepartamentosUsuario,getOrganizacion,getOrganizacionesSociales,getMunicipiosUsuario,getAldeasUsuario,getCaseriosUsuario };//TODO: Exportamos las funcionessss