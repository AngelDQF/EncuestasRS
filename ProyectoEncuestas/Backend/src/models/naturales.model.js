let pool = require('./config.model');// TODO: Importamos el archivo de configuración

async function getBosques() {//TODO: Funcion para obtener todos los bosques
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Bosques_Listar");//TODO: Ejecutamos la consulta
    return result.recordset;//TODO: Retornamos los datos
  } catch (error) {//TODO: Si hay un error al ejecutar el codigo capturamos el error
    console.log(error);//TODO: Mostramos el error
  }
}
async function getBosquesDesactivados() {//TODO: Funcion para obtener todos los bosques desactivados
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * from vew_Bosques_Listar_Desactivados");//TODO: Ejecutamos la consulta
    return result.recordset;//TODO: Retornamos los datos
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
    }

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

  } catch (error) {//TODO: Si hay un error al ejecutar el codigo capturamos el error
    console.log(error);//TODO: Mostramos el error
  }
}
async function getBosque(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Bosques_Buscar ${id}`);
    if (result.recordset.length !== 0) {
      return result.recordset
    } else {
      return "Tipo de Bosque no encontrado"
    }
  }
  catch (error) {
    console.log(error);
  }
};
async function postBosque(bosque, estado) {
  try {
    const consulta = await verificarBosque(bosque);
    if (consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Bosques_Crear '${bosque}',  '${estado}'`);
      return "exito";
    } else {
      return "ambiguo"
    }
  } catch (error) {
    console.log(error);
    return "error";
  }
}
async function putBosque(id, bosque) {
  try {
    const consulta1 = await verificarBosqueByID(id);
    const consulta2 = await verificarBosque(bosque);
    if (!consulta1) {
      if (consulta2) {
        await pool.connect()
        await pool.request().query(`Exec prc_Bosques_Editar ${id}, '${bosque}'`);

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
async function putBosqueEstado(id, estado) {
  try {
    const consulta = await verificarBosqueByID(id);
    if (!consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Bosques_Estado ${id}, '${estado}'`);
      return "exito";
    } else {
      return "vacio"
    }
  } catch (error) {
    console.log(error);
  }
}
async function verificarBosque(bosque) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Bosques_Buscar_Nombre '${bosque}'`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
async function verificarBosqueByID(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Bosques_Buscar ${id}`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
//Suelos
async function getSuelo(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Suelos_Buscar ${id}`);
    if (result.recordset.length !== 0) {
      return result.recordset
    } else {
      return "Tipo de Suelo no encontrado"
    }
  }
  catch (error) {
    console.log(error);
  }
};
async function postSuelo(suelo, estado) {
  try {
    const consulta = await verificarSuelo(suelo);
    if (consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Suelos_Crear '${suelo}',  '${estado}'`);
      return "exito";
    } else {
      return "ambiguo"
    }
  } catch (error) {
    console.log(error);
    return "error";
  }
}
async function putSuelo(id, suelo) {
  try {
    const consulta1 = await verificarSueloByID(id);
    const consulta2 = await verificarSuelo(suelo);
    if (!consulta1) {
      if (consulta2) {
        await pool.connect()
        await pool.request().query(`Exec prc_Suelos_Editar ${id}, '${suelo}'`);
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
async function putSueloEstado(id, estado) {
  try {
    const consulta = await verificarSueloByID(id);
    if (!consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Suelos_Editar_Estado ${id}, '${estado}'`);
      return "exito";
    } else {
      return "vacio"
    }
  } catch (error) {
    console.log(error);
  }
}
async function verificarSuelo(suelo) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Suelos_Buscar_Nombre '${suelo}'`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
async function verificarSueloByID(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Suelos_Buscar ${id}`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
module.exports = { getBosques, getBosquesDesactivados, getSuelos, getSuelosDesactivados, getSuelo, postSuelo, putSuelo, putSueloEstado, getBosque, postBosque, putBosque, putBosqueEstado };//TODO: Exportamos las Funciones