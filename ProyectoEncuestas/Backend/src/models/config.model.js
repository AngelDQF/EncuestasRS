require("dotenv").config();//TODO: Importamos dotenv para poder usar las variables de entorno
const sql = require('mssql');// TODO: Importamos el módulo de mssql

const configBD = {//TODO: Exportamos un objeto con las variables de entorno
  user: process.env.DB_USER,//TODO: Obtenemos el usuario de la base de datos
  password: process.env.DB_PASSWORD,//TODO: Obtenemos la contraseña de la base de datos
  server: process.env.DB_SERVER,//TODO: Obtenemos el servidor de la base de datos
  database: process.env.DB_DATABASE,//TODO: Obtenemos el nombre de la base de datos
  port: parseInt(process.env.DB_PORTSQL),//TODO: Obtenemos el puerto de la base de datos
  options: {//TODO: Obtenemos las opciones de la base de datos
    trustedconnection: false,
    enableArithAbort: true,
    encrypt: false
  }
}
const pool = new sql.ConnectionPool(configBD);//TODO: Creamos una instancia de la conexión a la base de datos
module.exports = pool;//TODO: Exportamos la instancia de la conexión a la base de datos