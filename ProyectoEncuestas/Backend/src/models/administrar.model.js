const pool = require('./config.model');
async function getEncuestasUser(id) {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Usuarios_Encuestas '${id}'`);//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      pool.close();//TODO: Cerramos la conexión
      return result.recordset;//TODO: Retornamos los datos
    } else {
      pool.close();//TODO: Cerramos la conexión
      return "vacio";
    }
  } catch (error) {
    console.log(error);
    return "error";
  }
}
async function getEncuestasUserDep(id, idUser) {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Encuestas_Departamento_User '${id}','${idUser}'`);//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      pool.close();//TODO: Cerramos la conexión
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      pool.close();//TODO: Cerramos la conexión
      return "No hay Encuestas agregadas"
    }

  } catch (error) {
    console.log(error);
  }
}

async function getEncuestasUserMun(id, idUser) {//TODO: Creamos la función que se encargará de listar todos los ejes
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let result = await pool.request().query(`Exec prc_Encuestas_Municipio_User '${id}', ${idUser}`);//TODO: Ejecutamos la consulta
    if (result.recordset.length !== 0) {
      pool.close();//TODO: Cerramos la conexión
      return result.recordset;//TODO: Retornamos los datos
    }
    else {
      pool.close();//TODO: Cerramos la conexión
      return "No hay Encuestas agregadas"
    }

  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  getEncuestasUser,
  getEncuestasUserDep,
  getEncuestasUserMun
}