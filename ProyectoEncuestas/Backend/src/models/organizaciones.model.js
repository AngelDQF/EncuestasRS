let pool = require('./config.model');// TODO: Importamos el archivo de configuración

async function getOrganizaciones() {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Organizaciones_Listar");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      await pool.close();//TODO: Cerramos la conexión
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      await pool.close();//TODO: Cerramos la conexión
      return "No hay Organizaciones Agregadas"
    }
  } catch (error) {
    console.log(error);
  }
}
async function getOrganizacion(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Organizaciones_Buscar ${id}`);
    if (result.recordset.length !== 0) {
      await pool.close();//TODO: Cerramos la conexión
      return await result.recordset
    } else {
      await pool.close();//TODO: Cerramos la conexión
      return "Organización no encontrada"
    }
  }
  catch (error) {
    console.log(error);
  }
};
async function getOrganizacionesDesactivadas() {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Organizaciones_Listar_Desactivados");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      await pool.close();//TODO: Cerramos la conexión
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      await pool.close();//TODO: Cerramos la conexión
      return "No hay Organizaciones Desactivados"
    }
  } catch (error) {
    console.log(error);
  }
}
async function getTipoOrganizaciones() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Tipos_Organizaciones_Listar");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      await pool.close();//TODO: Cerramos la conexión
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      await pool.close();//TODO: Cerramos la conexión
      return "No hay Tipos de Organizaciones Agregadas"
    }
  } catch (error) {
    console.log(error);
  }
}
async function getTipoOrganizacion(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Tipo_Org_Buscar ${id}`);
    if (result.recordset.length !== 0) {
      await pool.close();//TODO: Cerramos la conexión
      return result.recordset
    } else {
      await pool.close();//TODO: Cerramos la conexión
      return "Tipo de organización no encontrada"
    }
  }
  catch (error) {
    console.log(error);
  }
};
async function getTipoOrganizacionesDesactivadas() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Tipos_Organizaciones_Listar_Desactivados");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      await pool.close();//TODO: Cerramos la conexión
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      await pool.close();//TODO: Cerramos la conexión
      return "No hay Tipos de Organizaciones Desactivados"
    }
  } catch (error) {
    console.log(error);
  }
}
async function postOrg(tipo, social, org, estado) {//TODO: Creamos la función que se encargará de crear un eje
  try {//TODO: Intentamos ejecutar el código
    const consulta = await verificarOrg(org);//TODO: Verificamos si el eje existe
    if (consulta) {//TODO: Si el eje no existe
      await pool.connect()//TODO: Conectamos a la base de datos
      await pool.request().query(`Exec prc_Organizaciones_Crear ${tipo}, '${social}', '${org}', '${estado}'`);//TODO: Ejecutamos la consulta
      await pool.close();//TODO: Cerramos la conexión
      return "exito";//TODO: Retornamos la Org creada
    } else {
      await pool.close();//TODO: Cerramos la conexión
      return "ambiguo";
    }
  } catch (error) {//TODO: Si hay un error
    console.log(error);// TODO: Mostramos el error
    return "error"
  }
}
async function putOrg(id, org) {
  try {
    const consulta1 = await verificarOrgByID(id);
    const consulta2 = await verificarOrg(org);
    if (!consulta1) {
      if (consulta2) {
        await pool.connect()
        await pool.request().query(`Exec prc_Organizaciones_Editar ${id}, '${org}'`);
        pool.close();
        return "exito";
      } else {
        await pool.close();//TODO: Cerramos la conexión
        return "ambiguo"
      }
    } else {
      await pool.close();//TODO: Cerramos la conexión
      return "vacio";
    }
  } catch (error) {
    console.log(error)
    return "error"
  }
}
async function putOrgEstado(id, estado) {
  try {
    const consulta1 = await verificarOrgByID(id);
    if (!consulta1) {
      await pool.connect()
      await pool.request().query(`Exec prc_Organizaciones_Editar_Estado ${id}, '${estado}'`);
      pool.close();
      return "exito";
    } else {
      await pool.close();//TODO: Cerramos la conexión
      return "vacio";
    }
  } catch (error) {
    console.log(error)
    return "error"
  }
}
async function putOrgDatos(id, tipo, social) {
  try {
    const consulta1 = await verificarOrgByID(id);
    if (!consulta1) {
      await pool.connect()
      await pool.request().query(`Exec prc_Organizaciones_Editar_Datos ${id}, ${tipo}, '${social}'`);
      pool.close();
      return "exito";
    } else {
      await pool.close();//TODO: Cerramos la conexión
      return "vacio";
    }
  } catch (error) {
    console.log(error)
    return "error"
  }
}
async function verificarOrgByID(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Organizaciones_Buscar ${id}`);
    await pool.close();//TODO: Cerramos la conexión
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
async function verificarOrg(org) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Organizaciones_Buscar_Org '${org}'`);
    await pool.close();//TODO: Cerramos la conexión
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
async function postTipoOrg(tipo, estado) {//TODO: Creamos la función que se encargará de crear un eje
  try {//TODO: Intentamos ejecutar el código
    const consulta = await verificarTipoOrg(tipo);//TODO: Verificamos si el eje existe
    if (consulta) {//TODO: Si el eje no existe
      await pool.connect()//TODO: Conectamos a la base de datos
      await pool.request().query(`Exec prc_Tipo_Org_Crear '${tipo}', '${estado}'`);//TODO: Ejecutamos la consulta
      await pool.close();//TODO: Cerramos la conexión
      return "exito";//TODO: Retornamos la Org creada
    } else {
      return "ambiguo";
    }
  } catch (error) {//TODO: Si hay un error
    console.log(error);// TODO: Mostramos el error
    return "error"
  }
}
async function putTipoOrg(id, tipo) {
  try {
    const consulta1 = await verificarTipoOrgByID(id);
    const consulta2 = await verificarTipoOrg(org);
    if (!consulta1) {
      if (consulta2) {
        await pool.connect()
        await pool.request().query(`Exec prc_Tipo_Org_Editar ${id}, '${tipo}'`);
        pool.close();
        return "exito";
      } else {
        return "ambiguo"
      }
    } else {
      return "vacio";
    }
  } catch (error) {
    console.log(error)
    return "error"
  }
}
async function putTipoOrgEstado(id, estado) {
  try {
    const consulta1 = await verificarTipoOrgByID(id);
    if (!consulta1) {
      await pool.connect()
      await pool.request().query(`Exec prc_Tipo_Org_Editar_Estado ${id}, '${estado}'`);
      pool.close();
      return "exito";
    } else {
      return "vacio";
    }
  } catch (error) {
    console.log(error)
    return "error"
  }
}
async function verificarTipoOrgByID(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Tipo_Org_Buscar ${id}`);
    await pool.close();//TODO: Cerramos la conexión
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
async function verificarTipoOrg(tipo) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Tipo_Org_Buscar_Nombre '${tipo}'`);
    await pool.close();//TODO: Cerramos la conexión
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
module.exports = { getTipoOrganizaciones, getOrganizacionesDesactivadas, getTipoOrganizacionesDesactivadas, getOrganizaciones, postOrg, putOrg, putOrgEstado, putOrgDatos, postTipoOrg, putTipoOrg, putTipoOrgEstado, getOrganizacion, getTipoOrganizacion };//TODO: Exportamos las Funciones