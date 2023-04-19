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
module.exports = {createA};