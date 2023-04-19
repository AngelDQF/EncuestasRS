const pool = require('./config.model');// TODO: Importamos el archivo de configuración
/**
 * TODO: Funcion para obtener todos los cargos de la base de datos
 * @returns 
 */
async function getCargos() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Cargos_Listar");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Cargos agregados"
    }
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function getCargo(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Cargos_Buscar ${id}`);
    if (result.recordset.length !== 0) {
      return await result.recordset
    } else {
      return "Cargo no encontrado"
    }
  }
  catch (error) {
    console.log(error);
  }
};
async function getCargosDesactivados() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Cargos_Listar_Desactivados");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Tipos de Cargos Desactivados"
    }
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}
async function postCargos(cargo, estado) {//TODO: Creamos la función que se encargará de crear un eje
  try {//TODO: Intentamos ejecutar el código
    const consulta = await verificarCargo(cargo);//TODO: Verificamos si el eje existe
    if (consulta) {//TODO: Si el eje no existe
      await pool.connect()//TODO: Conectamos a la base de datos
      await pool.request().query(`Exec prc_Cargos_Agregar '${cargo}', '${estado}'`);//TODO: Ejecutamos la consulta
      pool.close();//TODO: Cerramos la conexión
      return true;//TODO: Retornamos el eje creado
    } else {//TODO: Si el eje existe
      return false;//TODO: Retornamos un mensaje
    }
  } catch (error) {//TODO: Si hay un error
    console.log(error);// TODO: Mostramos el error
  }
}

async function verificarCargo(cargo) {//TODO: Creamos la función que se encargará de verificar si un eje existe en base a su nombre
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Cargos_Verificcar_Cargo '${cargo}'`);
    pool.close();//TODO: Cerramos la conexión
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);

  }
}
module.exports = { getCargos, getCargo, getCargosDesactivados, postCargos };//TODO: Exportamos las funcionessss