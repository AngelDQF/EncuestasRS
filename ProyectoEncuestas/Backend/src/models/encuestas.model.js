const pool = require('./config.model');// TODO: Importamos el archivo de configuración

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
  } catch (error) {
    console.log(error);
  }
}
async function getEncuestasByDep(id) {
  try {
    await pool.connect()
    let result = await pool.request().query(`Exec prc_Encuestas_Departamento '${id}'`);
    if (result.recordset.length !== 0) {
      return result.recordset;
    }
    else {
      return "No hay Encuestas agregadas"
    }
  } catch (error) {
    console.log(error);
  }
}
async function getEncuestasByMun(id) {
  try {
    await pool.connect()
    let result = await pool.request().query(`Exec prc_Encuestas_Municipio '${id}'`);
    if (result.recordset.length !== 0) {
      return result.recordset;
    }
    else {
      return "No hay Encuestas agregadas"
    }
  } catch (error) {
    console.log(error);
  }
}

async function postEncuesta(hombres, mujeres, total, dep, mun, aldea, caserio, address, org, rios, cant_rios, bosques, tipo_bosque, suelo, tenencia, mercado, tecno, user, mesa) {
  try {
    await pool.connect()
    const consulta = await pool.request().query(`Exec prc_Encuestas_Crear '${hombres}', '${mujeres}', '${total}', '${dep}', '${mun}', '${aldea}', '${caserio}', '${address}', '${org}', '${rios}', '${cant_rios}','${bosques}', '${tipo_bosque}', '${suelo}', '${tenencia}', '${mercado}', '${tecno}', '${user}', ${mesa}`);
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
async function getJuntaByID(id) {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Junta_Listar_ID ${id}`);//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "vacio"
    }
    //console.log(result.recordsets);
  } catch (error) {
    console.log(error);
    return "error"
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
  } catch (error) {
    console.log(error);
  }
}
async function postGeoUbicacion(id, lon, lat) {
  try {
    await pool.connect()
    await pool.request().query(`Exec prc_Geo_Ubicacion_Crear ${id}, '${lon}', '${lat}'`);
    return "exito";
  } catch (error) {
    console.log(error);
    return "error";
  }
}
async function postJunta(id, cargo, eje, dni, name, tel, sexo, edad, esc) {
  try {
    await pool.connect();
    await pool.request().query(`Exec prc_Junta_Crear ${id}, ${cargo}, ${eje}, '${dni}', '${name}', '${tel}', '${sexo}', ${edad}, ${esc}`);
    return "exito";
  } catch (error) {
    console.log(error);
    return "error";
  }
}
async function postServBasico(id, idServ) {
  try {
    await pool.connect();
    await pool.request().query(`Exec prc_Detalle_Serv_Basicos_Crear ${id},${idServ}`);
    return "exito"
  } catch (error) {
    console.log(error);
    return "error"
  }
}
async function postServLocal(id, idServ) {
  try {
    await pool.connect();
    await pool.request().query(`Exec prc_Detalle_Serv_Locales_Crear ${id}, ${idServ}`);
    return "exito"
  } catch (error) {
    console.log(error);
    return "error"
  }
}

async function postDetalleOrg(id, idOrg) {
  try {
    await pool.connect();
    await pool.request().query(`Exec prc_Detalle_Org_Crear ${id}, ${idOrg}`);
    return "exito"
  } catch (error) {
    console.log(error);
    return "error"
  }
}
async function postDetalleImportacion(id, importacion) {
  try {
    await pool.connect();
    await pool.request().query(`Exec prc_Importacion_Crear ${id}, '${importacion}'`);
    return "exito"
  } catch (error) {
    console.log(error);
    return "error"
  }
}
async function postDetalleExportacion(id, exportacion) {
  try {
    await pool.connect();
    await pool.request().query(`Exec prc_Exportacion_Crear ${id}, '${exportacion}'`);
    return "exito"
  } catch (error) {
    console.log(error);
    return "error"
  }
}
async function postDetalleUsoTierra(id, uso) {
  try {
    await pool.connect();
    await pool.request().query(`Exec prc_Uso_Tierra_Crear ${id}, ${uso}`);
    return "exito"
  } catch (error) {
    console.log(error);
    return "error"
  }
}
async function postDetalleFinanciamiento(id, tipo, fuente, obser) {
  try {
    await pool.connect();
    await pool.request().query(`Exec prc_Detalle_Financiamiento_Crear ${id}, ${tipo}, ${fuente}, '${obser}'`);
    return "exito"
  } catch (error) {
    console.log(error);
    return "error"
  }
}
async function postDetalleRequerimiento(id, estructura, estado, obser) {
  try {
    await pool.connect();
    await pool.request().query(`Exec prc_Requerimiento_Crear ${id}, ${estructura}, ${estado}, '${obser}'`);
    return "exito"
  } catch (error) {
    console.log(error);
    return "error"
  }
}

module.exports = { getEncuestas, getEncuestasByDep, getEncuestasByMun, getDepartamentosUsuario, getOrganizacion, getOrganizacionesSociales, getMunicipiosUsuario, getAldeasUsuario, getCaseriosUsuario, getEstructurasEncuestas, getEstadosEncuestas, getTecnologicoEncuestas, getEncuestasDep, getEncuestasMun, getOrgLocales, postEncuesta, postGeoUbicacion, postJunta, postServBasico, postServLocal, postDetalleOrg, postDetalleImportacion, postDetalleExportacion, postDetalleUsoTierra, postDetalleFinanciamiento, postDetalleRequerimiento, getJuntaByID };//TODO: Exportamos las funcionessss