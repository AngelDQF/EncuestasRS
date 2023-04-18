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
async function postEncuesta(hombres, mujeres, total, dep, mun, aldea, caserio, address, org, rios, cant_rios, bosques, tipo_bosque, suelo, tenencia, mercado, tecno, user) {
  try {
    await pool.connect()
    const consulta = await pool.request().query(`Exec prc_Encuestas_Crear '${hombres}', '${mujeres}', '${total}', '${dep}', '${mun}', '${aldea}', '${caserio}', '${address}', '${org}', '${rios}', '${cant_rios}','${bosques}', '${tipo_bosque}', '${suelo}', '${tenencia}', '${mercado}', '${tecno}', '${user}'`);
    return consulta.recordset;
  } catch {
    return "error"
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
async function getMunicipiosUsuario(user, dep) {//TODO: Creamos la función que se encargará de listar todos los ejes
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
async function getOrgLocales() {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("Select * from vew_Encuestas_Organizacion_Local");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "error"
    }

  } catch {
    return "error"
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
async function getEstructurasEncuestas() {//TODO: Función para obtener todos los usuarios
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
async function getEstadosEncuestas() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Encuestas_Estados");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Estados Agregadas"
    }
    pool.close();//TODO: Cerramos la conexión
  } catch (error) {
    console.log(error);
  }
}
async function getTecnologicoEncuestas() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Encuestas_Tecnologico");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Nivel Tecnologico Agregado"
    }
    pool.close();//TODO: Cerramos la conexión
  } catch (error) {
    console.log(error);
  }
}

async function getEncuestasDep(id) {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Encuestas_Departamento '${id}'`);//TODO: Ejecutamos la consulta
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

async function getEncuestasMun(id) {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Encuestas_Municipio '${id}'`);//TODO: Ejecutamos la consulta
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
async function postGeoUbicacion(id, lon, lat) {
  try {
    await pool.connect()
    await pool.request().query(`Exec prc_Geo_Ubicacion_Crear '${id}', '${lon}', ${lat}`);
    pool.close();
    return "exito";
  } catch (error){
    console.log(error);
    return "error";
  }
}
module.exports = { getEncuestas, getDepartamentosUsuario, getOrganizacion, getOrganizacionesSociales, getMunicipiosUsuario, getAldeasUsuario, getCaseriosUsuario, getEstructurasEncuestas, getEstadosEncuestas, getTecnologicoEncuestas, getEncuestasDep, getEncuestasMun, getOrgLocales, postEncuesta,postGeoUbicacion };//TODO: Exportamos las funcionessss