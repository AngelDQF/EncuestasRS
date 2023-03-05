const pool = require('./config.model');// TODO: Importamos el archivo de configuración

async function getAldeas(){
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("Exec prc_Aldeas_Listar");//TODO: Ejecutamos la consulta
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
    throw error;
  }
}
async function getAldea(aldea) {//TODO: Creamos la función que se encargará de obtenr un eje por su nombre
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let consulta = await pool.request().query(`Exec prc_Aldeas_Listar_Aldea '${aldea}'`);
    if (consulta.recordset.length === 0) {
      return "La Aldea no existe";
    }
    else {
      return await consulta.recordset;
    }
    pool.close();//TODO: Cerramos la conexión
  } catch (error) {
    console.log(error);
    throw error;
  }
}





module.exports={getAldeas,getAldea}