let pool = require('./config.model');// TODO: Importamos el archivo de configuración

async function getServiciosLocales() {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("Exec prc_Servicios_Locales_Listar");//TODO: Ejecutamos la consulta

    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Servicios Locales Agregados"
    }
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function putEstadoServicioLocal(id, est) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    await pool.request().query(`Exec prc_Servicio_Put_Estado ${id}, ${est}`);
    return "Registro Actualizado"
  }
  catch (error) {
    console.log(error);
  }
};
async function getServiciosLocalesDesactivadas() {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("Exec prc_Servicios_Locales_Listar_Desactivados");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Servicios Locales Desactivados"
    }
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getServiciosBasicos() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("Exec prc_Servicios_Basicos_Listar");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Servicios Basicos Agregados"
    }
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getServiciosBasicosDesactivados() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("Exec prc_Servicios_Basicos_Listar_Desactivados");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      pool.close();//TODO: Cerramos la conexiónsss
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      pool.close();//TODO: Cerramos la conexiónsss
      return "No hay Servicios Basicos Desactivados"
    }

  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function postServicio(tipo, servicio, estado) {
  try {
    const consulta = await verificarServicio(servicio, tipo);
    if (consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Servicios_Crear '${tipo}', '${servicio}',  '${estado}'`);
      pool.close();
      return "exito";
    } else {
      return "ambiguo"
    }
  } catch (error) {
    console.log(error);
    return "error";
  }
}
async function putServicio(id, servicio) {
  try {
    const consulta1 = await verificarServicioByID(id);
    const consulta2 = await verificarServicio(servicio);
    if (!consulta1) {
      if (consulta2) {
        await pool.connect()
        await pool.request().query(`Exec prc_Organizaciones_Editar ${id}, '${org}'`);
        pool.close();
        return "exito";
      } else {
        return "ambiguo"
      }
    } else {
      return "vacio";
    }
  } catch (error) {
    console.log(eroor);
  }
}
async function putServicioEstado(id, estado) {
  try {
    const consulta = await verificarServicioByID(id);
    if (!consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Servicios_Editar_Estado ${id}, '${estado}'`);
      pool.close();
      return "exito";
    }else{
      return "vacio"
    }
  } catch (error) {
    console.log(eroor);
  }

}

async function verificarServicio(servicio, tipo) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Servicios_Buscar_Nombre '${servicio}','${tipo}'`);
    pool.close();//TODO: Cerramos la conexión
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
async function verificarServicioByID(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Servicios_Buscar '${id}'`);
    pool.close();//TODO: Cerramos la conexión
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
module.exports = { getServiciosLocales, getServiciosLocalesDesactivadas, getServiciosBasicos, getServiciosBasicosDesactivados, putEstadoServicioLocal, postServicio, putServicio, putServicioEstado };//TODO: Exportamos las Funciones