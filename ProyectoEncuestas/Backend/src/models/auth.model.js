const pool = require('./config.model');// TODO: Importamos el archivo de configuración
async function login(email) {//TODO: Función para verificar si el usuario existe
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Auth_Login_Email '${email}'`);//TODO: Ejecutamos la consulta
    return result;//TODO: Retornamos los datos
  }
  catch (error) {
    console.log(error);//TODO: Mostramos el error
  }
}
module.exports = {login};