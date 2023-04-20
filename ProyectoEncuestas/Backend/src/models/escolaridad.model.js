const pool = require('./config.model');
async function getGrados() {
  try {
    await pool.connect()
    let result = await pool.request().query("Exec prc_Escolaridad_Listar");

    if (result.recordset.length !== 0) {
      return result.recordset;
    }
    else {
      return "No hay grados de escolaridad agregados"
    }
  } catch (error) {
    console.log(error);
  }
}
async function getGradoByID(id) {
  try {
    await pool.connect()
    let result = await pool.request().query(`Exec prc_Escolaridad_Buscar_ID '${id}'`);

    if (result.recordset.length !== 0) {
      return result.recordset;
    }
    else {
      return "No hay grados de escolaridad agregados"
    }
  } catch (error) {
    console.log(error);
  }
}
async function getGradosDesactivados() {
  try {
    await pool.connect()
    let result = await pool.request().query("Exec prc_Escolaridad_Listar_Desactivados");

    if (result.recordset.length !== 0) {
      return result.recordset;
    }
    else {
      return "No hay grados de escolaridad desactivados"
    }
  } catch (error) {
    console.log(error);
  }
}
async function postGrado(grado, estado) {
  try {
    const consulta = await verificarGradoByName(grado);
    if (consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Escolaridad_Agregar '${grado}', '${estado}'`);
      pool.close();
      return "exito";
    } else {
      return "ambiguo";
    }
  } catch (error) {
    return "error";
  }
}
async function putGradoNombre(id, grado) {
  try {
    const consulta = await verificarGradoByID(id);
    const consulta2 = await verificarGradoByName(grado);
    if (!consulta) {
      if (consulta2) {
        await pool.connect();
        await pool.request().query(`prc_Escolaridad_Cambiar_Nombre ${id},'${grado}'`);
        return "exito"
      }else{
        return 'ambiguo'
      }
    } else {
      return "error";
    }
  } catch (erro) {
    console.log(error);
    return "error";
  }
}
async function putGradoEstado(id, estado) {
  try {
    const consulta = await verificarGradoByID(id);
    if (!consulta) {
      await pool.connect()
      await pool.request().query(`Exec prc_Escolaridad_Cambiar_Estado '${id}', '${estado}'`);
      pool.close();
      return "exito";
    } else {
      pool.close();
      return "ambiguo";
    }
  } catch (error) {
    pool.close();
    return "error";
  }
}
async function verificarGradoByName(grado) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Escolaridad_Buscar '${grado}'`);
    pool.close();//TODO: Cerramos la conexión
    return result.recordset.length === 0;
  } catch (error) {
    console.log(error);
  }
}

async function verificarGradoByID(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Escolaridad_Buscar_ID '${id}'`);
    pool.close();//TODO: Cerramos la conexión
    return result.recordset.length === 0;
  } catch (error) {
    console.log(error);
  }
}
module.exports = { getGradoByID, putGradoEstado, getGrados, getGradosDesactivados, postGrado, putGradoNombre };