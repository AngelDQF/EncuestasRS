const pool = require('./config.model');// TODO: Importamos el archivo de configuración
async function getDepartamentos() {//TODO: Creamos la función que se encargará de listar todos los Departamentos
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Departamentos_Listar");//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      return "No hay Ejes agregados"
    }
    pool.close();//TODO: Cerramos la conexión

  } catch (error) {
    console.log(error);
  }
}





module.exports = { getDepartamentos }//TODO: Exportamos las funciones