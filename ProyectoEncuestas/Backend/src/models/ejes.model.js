const pool = require('./config.model');// TODO: Importamos el archivo de configuración
/**
 * TODO: Funcion para obtener todos los ejes de la base de datos
 * @returns 
 */
async function getEjes() {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Ejes_Listar");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Ejes agregados"
    }
    //console.log(result.recordsets);
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getEjesDesactivados() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Ejes_Listar_Desactivados");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    return result.recordset;//TODO: Retornamos los datos
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
/**
 * TODO: Funcion para obtener un eje en base a su ID
 * @param {*} id 
 * @returns 
 */
async function getEjeID(id) {//TODO: Creamos la función que se encargará de obtenr un eje por su nombre
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let consulta = await pool.request().query(`Exec prc_Ejes_Buscar_ID ${id}`);//TODO: Ejecutamos la consulta
    if (consulta.recordset.length === 0) {//TODO: Si no hay resultados
      return "El Eje no existe";//TODO: Retornamos un mensaje
    }
    else {//TODO: Si hay resultados
      return consulta.recordset;//TODO: Retornamos los datos
    }
    pool.close();//TODO: Cerramos la conexión
  } catch (error) {//TODO: Si hay un error
    console.log(error);//TODO: Mostramos el error
  }
}
/**
 * Funcion para crear un Eje
 * @param {*} eje 
 * @param {*} estado 
 * @returns 
 */
async function postEjes(eje, estado) {//TODO: Creamos la función que se encargará de crear un eje
  try {//TODO: Intentamos ejecutar el código
    const consulta = await verificarEje(eje);//TODO: Verificamos si el eje existe
    if (consulta) {//TODO: Si el eje no existe
      await pool.connect()//TODO: Conectamos a la base de datos
      await pool.request().query(`Exec prc_Ejes_Agregar '${eje}', '${estado}'`);//TODO: Ejecutamos la consulta
      pool.close();//TODO: Cerramos la conexión
      return "exito";//TODO: Retornamos el eje creado
    } else {//TODO: Si el eje existe
      return "ambiguo";//TODO: Retornamos un mensaje
    }
  } catch (error) {//TODO: Si hay un error
    return "error";//TODO: Retornamos un mensaje
  }
}
/**
 * TODO: Funcion para Actualizar un eje
 * @param {*} id 
 * @param {*} eje 
 * @param {*} estado 
 * @returns 
 */
async function putEjeNombre(id, eje) {//TODO: Creamos la función que se encargará de actualizar un eje
  try {//TODO: Intentamos ejecutar el código
    const consulta = await verificarEjeID(id);//TODO: Verificamos si existe un eje con esa ID
    if (consulta === false) {//TODO: Si el ID existe
      const consulta2 = await verificarEje(eje);//TODO: Verificamos si hay un eje existente con el mismo nombre
      if (consulta2) {//TODO: Si no hay un eje con el mismo nombre
        await pool.connect()//TODO: Conectamos a la base de datos
        await pool.request().query(`Exec prc_Ejes_Editar '${id}', '${eje}'`);//TODO: Ejecutamos la consulta
        pool.close();//TODO: Cerramos la conexión
        return "exito";//TODO: Retornamos el eje actualizado
      } else {//TODO: Si hay un eje con el mismo nombre
        return "ambiguo";//TODO: Retornamos un mensaje
      }
    } else {//TODO: Si el ID no existe
      return "noID";//TODO: Retornamos un mensaje
    }
  } catch (error) {//TODO: Si hay un error
    return "error";
  }

}

async function putEjeEstado(id, estado) {
  try {
    const consulta = await verificarEjeID(id);
    if (consulta === false) {
      await pool.connect()//TODO: Conectamos a la base de datos
      await pool.request().query(`Exec prc_Ejes_Actualizar_Estado ${id}, '${estado}'`);
      pool.close();//TODO: Cerramos la conexión
      const result = await getEjeID(id);
      return await result;
    }
  }
  catch (error) {
    console.log(error)
  }

}
async function verificarEje(eje) {//TODO: Creamos la función que se encargará de verificar si un eje existe en base a su nombre
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Ejes_Buscar_Eje '${eje}'`);
    pool.close();//TODO: Cerramos la conexión
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
/**
 * TODO: Funcion para verificar un eje en base a su ID
 * @param {*} id 
 * @returns 
 */
async function verificarEjeID(id) {//TODO: Creamos la función que se encargará de verificar si un eje existe en base a su ID
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Ejes_Buscar_ID ${id}`);//TODO: Ejecutamos la consulta
    pool.close();//TODO: Cerramos la conexión
    return result.recordset.length === 0;//TODO: Retornamos los datos
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = { getEjes, getEjesDesactivados,getEjeID, postEjes, verificarEje, putEjeNombre, putEjeEstado };//TODO: Exportamos las funcionessss