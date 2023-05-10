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
  } catch (error) {
    console.log(error);
  }
}
//Mercados
async function getMercado(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Mercados_Buscar ${id}`);
    if (result.recordset.length !== 0) {

      return result.recordset
    } else {

      return "Tipo de Mercado no encontrado"
    }
  }
  catch (error) {
    console.log(error);
  }
};
async function postMercado(mercado, estado) {
  try {
    const consulta = await verificarMercado(mercado);
    if (consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Mercados_Crear '${mercado}',  '${estado}'`);
      return "exito";
    } else {
      await pool.connect()//TODO: Cerramos la conexión
      return "ambiguo"
    }
  } catch (error) {
    console.log(error);
    return "error";
  }
}
async function putMercado(id, mercado) {
  try {
    const consulta1 = await verificarMercadoByID(id);
    const consulta2 = await verificarMercado(mercado);
    if (!consulta1) {
      if (consulta2) {
        await pool.connect()
        await pool.request().query(`Exec prc_Mercados_Editar ${id}, '${mercado}'`);

        return "exito";
      } else {
        return "ambiguo"
      }
    } else {
      return "vacio";
    }
  } catch (error) {
    console.log(error);
  }
}
async function putMercadoEstado(id, estado) {
  try {
    const consulta = await verificarMercadoByID(id);
    if (!consulta) {
      await pool.connect()//TODO: Cerramos la conexión
      await pool.request().query(`Exec prc_Mercados_Editar_Estado ${id}, '${estado}'`);

      return "exito";
    } else {
      return "vacio"
    }
  } catch (error) {
    console.log(error);
  }
}
async function verificarMercado(mercado) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Mercados_Buscar_Nombre '${mercado}'`);
    console.log(result);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
async function verificarMercadoByID(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Mercados_Buscar ${id}`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
//Usos Tierra
async function getUsoTierra(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Usos_Tierra_Buscar ${id}`);
    if (result.recordset.length !== 0) {

      return result.recordset
    } else {

      return "Uso de la tierra no encontrado"
    }
  }
  catch (error) {
    console.log(error);
  }
};
async function postUsoTierra(uso, estado) {
  try {
    const consulta = await verificarUsoTierra(uso);
    if (consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Usos_Tierra_Crear '${uso}',  '${estado}'`);

      return "exito";
    } else {
      await pool.connect()//TODO: Cerramos la conexión
      return "ambiguo"
    }
  } catch (error) {
    console.log(error);
    return "error";
  }
}
async function putUsoTierra(id, uso) {
  try {
    const consulta1 = await verificarUsoTierraByID(id);
    const consulta2 = await verificarUsoTierra(uso);
    if (!consulta1) {
      if (consulta2) {
        await pool.connect()
        await pool.request().query(`Exec prc_Usos_Tierra_Editar ${id}, '${uso}'`);

        return "exito";
      } else {
        return "ambiguo"
      }
    } else {
      return "vacio";
    }
  } catch (error) {
    console.log(error);
  }
}
async function putUsoTierraEstado(id, estado) {
  try {
    const consulta = await verificarUsoTierraByID(id);
    if (!consulta) {
      await pool.connect()//TODO: Cerramos la conexión
      await pool.request().query(`Exec prc_Usos_Tierra_Editar_Estado ${id}, '${estado}'`);

      return "exito";
    } else {
      return "vacio"
    }
  } catch (error) {
    console.log(error);
  }
}
async function verificarUsoTierra(uso) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Usos_Tierra_Buscar_Nombre '${uso}'`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
async function verificarUsoTierraByID(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Usos_Tierra_Buscar ${id}`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
//Estructuras
async function getEstructura(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Estructuras_Buscar ${id}`);
    if (result.recordset.length !== 0) {

      return result.recordset
    } else {

      return "Estructura no encontrada"
    }
  }
  catch (error) {
    console.log(error);
  }
};
async function postEstructura(estructura, estado) {
  try {
    const consulta = await verificarEstructura(estructura);
    if (consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Estructuras_Crear '${estructura}', '${estado}'`);

      return "exito";
    } else {
      await pool.connect()//TODO: Cerramos la conexión
      return "ambiguo"
    }
  } catch (error) {
    console.log(error);
    return "error";
  }
}
async function putEstructura(id, estructura) {
  try {
    const consulta1 = await verificarEstructuraByID(id);
    const consulta2 = await verificarEstructura(estructura);
    if (!consulta1) {
      if (consulta2) {
        await pool.connect()
        await pool.request().query(`Exec prc_Estructuras_Editar ${id}, '${estructura}'`);

        return "exito";
      } else {
        return "ambiguo"
      }
    } else {
      return "vacio";
    }
  } catch (error) {
    console.log(error);
  }
}
async function putEstructuraEstado(id, estado) {
  try {
    const consulta = await verificarEstructuraByID(id);
    if (!consulta) {
      await pool.connect()//TODO: Cerramos la conexión
      await pool.request().query(`Exec prc_Estructuras_Editar_Estado ${id}, '${estado}'`);

      return "exito";
    } else {
      return "vacio"
    }
  } catch (error) {
    console.log(error);
  }
}
async function verificarEstructura(estructura) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Estructuras_Buscar_Nombre '${estructura}'`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
async function verificarEstructuraByID(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Estructuras_Buscar ${id}`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
//Tenencia Tierra
async function getTenencia(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Tenencia_Tierra_Buscar ${id}`);
    if (result.recordset.length !== 0) {

      return result.recordset
    } else {

      return "Tenencia de la Tierra no encontrada"
    }
  }
  catch (error) {
    console.log(error);
  }
};
async function postTenenciaTierra(tenencia, estado) {
  try {
    const consulta = await verificarTenenciaTierra(tenencia);
    if (consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Tenencia_Tierra_Crear '${tenencia}',  '${estado}'`);

      return "exito";
    } else {
      await pool.connect()//TODO: Cerramos la conexión
      return "ambiguo"
    }
  } catch (error) {
    console.log(error);
    return "error";
  }
}
async function putTenenciaTierra(id, tenencia) {
  try {
    const consulta1 = await verificarTenenciaTierraByID(id);
    const consulta2 = await verificarTenenciaTierra(tenencia);
    if (!consulta1) {
      if (consulta2) {
        await pool.connect()
        await pool.request().query(`Exec prc_Tenencia_Tierra_Editar ${id}, '${tenencia}'`);

        return "exito";
      } else {
        return "ambiguo"
      }
    } else {
      return "vacio";
    }
  } catch (error) {
    console.log(error);
  }
}
async function putTenenciaTierraEstado(id, estado) {
  try {
    const consulta = await verificarTenenciaTierraByID(id);
    if (!consulta) {
      await pool.connect()//TODO: Cerramos la conexión
      await pool.request().query(`Exec prc_Tenencia_Tierra_Editar_Estado ${id}, '${estado}'`);

      return "exito";
    } else {
      return "vacio"
    }
  } catch (error) {
    console.log(error);
  }
}
async function verificarTenenciaTierra(tenencia) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Tenencia_Tierra_Buscar_Nombre '${tenencia}'`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
async function verificarTenenciaTierraByID(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Tenencia_Tierra_Buscar ${id}`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = {
  getMercados, getMercadosDesactivados, getUsosTierra, getUsosTierraDesactivados, getTenenciaTierra, getTenenciaTierraDesactivados, getEstructuras, getEstructurasDesactivados, getMercado, postMercado, putMercado, putMercadoEstado, getUsoTierra, postUsoTierra, putUsoTierra, putUsoTierraEstado, getEstructura, postEstructura, putEstructura, putEstructuraEstado, getTenencia, postTenenciaTierra, putTenenciaTierra, putTenenciaTierraEstado
};//TODO: Exportamos las funcionessss