const pool = require('./config.model');// TODO: Importamos el archivo de configuración
async function getTiposFinanciamientos() {//TODO: Creamos la función que se encargará de listar todos los Tipos de Financiamientos
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Financiamientos_Listar_Tipos");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      await pool.connect()//TODO: Cerramos la conexión
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      await pool.connect()//TODO: Cerramos la conexión
      return "No hay Tipos de Financiamientos agregados"
    }
  } catch (error) {
    console.log(error);
  }
}
async function getTiposFinanciamientosDesactivados() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Financiamientos_Listar_Tipos_Desactivados");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      await pool.connect()//TODO: Cerramos la conexión
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      await pool.connect()//TODO: Cerramos la conexión
      return "No hay Tipos de Financiamientos Desactivados"
    }
  } catch (error) {
    console.log(error);
  }
}
async function getFuentesFinanciamientos() {//TODO: Creamos la función que se encargará de listar todos los Fuentes de Financiamientos
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Financiamientos_Listar_Fuentes");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      await pool.connect()//TODO: Cerramos la conexión
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      await pool.connect()//TODO: Cerramos la conexión
      return "No hay Fuentes de Financiamientos agregados"
    }
  } catch (error) {
    console.log(error);
  }
}
async function getFuentesFinanciamientosDesactivados() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Financiamientos_Listar_Fuentes_Desactivadas");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      await pool.connect()//TODO: Cerramos la conexión
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      await pool.connect()//TODO: Cerramos la conexión
      return "No hay Fuentes de Financiamientos Desactivados"
    }
  } catch (error) {
    console.log(error);
  }
}
//Fuentes
async function getFuenteFin(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Fuente_Financiamiento_Buscar ${id}`);
    if (result.recordset.length !== 0) {
      
      return result.recordset
    } else {
      
      return "Fuente de Financiamiento no encontrado"
    }
  }
  catch (error) {
    console.log(error);
  }
};
async function postFuenteFin(fuente, estado) {
  try {
    const consulta = await verificarFuenteFin(fuente);
    if (consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Fuente_Financiamiento_Crear '${fuente}', '${estado}'`);
      
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
async function putFuenteFin(id, fuente) {
  try {
    const consulta1 = await verificarFuenteFinByID(id);
    const consulta2 = await verificarFuenteFin(fuente);
    if (!consulta1) {
      if (consulta2) {
        await pool.connect()
        await pool.request().query(`Exec prc_Fuente_Financiamiento_Editar ${id}, '${fuente}'`);
        
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
async function putFuenteFinEstado(id, estado) {
  try {
    const consulta = await verificarFuenteFinByID(id);
    if (!consulta) {
      await pool.connect()//TODO: Cerramos la conexión
      await pool.request().query(`Exec prc_Fuente_Financiamiento_Editar_Estado ${id}, '${estado}'`);
      
      return "exito";
    } else {
      return "vacio"
    }
  } catch (error) {
    console.log(error);
  }
}
async function verificarFuenteFin(fuente) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Fuente_Financiamiento_Buscar_Nombre '${fuente}'`);
    
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
async function verificarFuenteFinByID(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Fuente_Financiamiento_Buscar ${id}`);
    
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
//Tipos
async function getTipoFin(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Tipo_Financiamiento_Buscar ${id}`);
    if (result.recordset.length !== 0) {
      
      return result.recordset
    } else {
      
      return "Tipo de Financiamiento no encontrado"
    }
  }
  catch (error) {
    console.log(error);
  }
};
async function postTipoFin(tipo, estado) {
  try {
    const consulta = await verificarTipoFin(tipo);
    if (consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Tipo_Financiamiento_Crear '${tipo}', '${estado}'`);
      
      return "exito";
    } else {
      return "ambiguo"
    }
  } catch (error) {
    console.log(error);
    return "error";
  }
}
async function putTipoFin(id, tipo) {
  try {
    const consulta1 = await verificarTipoFinByID(id);
    const consulta2 = await verificarTipoFin(tipo);
    if (!consulta1) {
      if (consulta2) {
        await pool.connect()
        await pool.request().query(`Exec prc_Tipo_Financiamiento_Editar ${id}, '${tipo}'`);
        
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
async function putTipoFinEstado(id, estado) {
  try {
    const consulta = await verificarTipoFinByID(id);
    if (!consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Tipo_Financiamiento_Editar_Estado ${id}, '${estado}'`);
      
      return "exito";
    } else {
      
      return "vacio"
    }
  } catch (error) {
    console.log(error);
  }
}
async function verificarTipoFin(tipo) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Tipo_Financiamiento_Buscar_Nombre '${tipo}'`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
async function verificarTipoFinByID(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Tipo_Financiamiento_Buscar ${id}`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = {
  getTiposFinanciamientos, getTiposFinanciamientosDesactivados, getFuentesFinanciamientos, getFuentesFinanciamientosDesactivados, getFuenteFin, postFuenteFin, putFuenteFin, putFuenteFinEstado, getTipoFin, postTipoFin,
  putTipoFin, putTipoFinEstado
};//TODO: Exportamos las funcionessss