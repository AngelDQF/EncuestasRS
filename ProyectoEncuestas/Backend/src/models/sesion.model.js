let pool = require('./config.model');
require("dotenv").config();

async function createA(key,contra){
  try {
    if(key === process.env.SECRET_PASS){
    await pool.connect()//TODO: Conectamos a la base de datos
    await pool.request().query(`Exec prc_Crear_Admin '${contra}'`);
    return "exito";
    }else{
      return "error";
    }
  }
  catch (error) {
    console.log(error);
    return "error";
  }
}
async function comprobarUsuarios() {//TODO: Función para obtener todos los usuarios
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query("SELECT * FROM vew_Usuarios_Listar");//TODO: Ejecutamos la consulta
    //console.log(result.recordset);
    return result.recordset.length === 0;
  } catch (error) {
    console.log(error);

  }
}
module.exports = {createA,comprobarUsuarios};