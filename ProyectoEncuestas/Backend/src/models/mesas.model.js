const pool = require('./config.model');// TODO: Importamos el archivo de configuración
async function getMesaByID(id) {//TODO: Creamos la función que se encargará de obtenr un eje por su nombre
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    let consulta = await pool.request().query(`Exec prc_Mesa_Buscar '${id}'`);//TODO: Ejecutamos la consulta
    if (consulta.recordset.length === 0) {//TODO: Si no hay resultados
      return "vacio";//TODO: Retornamos un mensaje
    } else {//TODO: Si hay resultados
      return consulta.recordset;//TODO: Retornamos los datos
    }
  } catch (error) {//TODO: Si hay un error
    console.log(error);//TODO: Mostramos el error
    return "error";//TODO: Retornamos un mensaje
  }
}

async function postMesa(id) {
  try {
    const consulta = await verificarMesa(id);
    await pool.connect()
    if (consulta) {
      const resultado = await pool.request().query(`Exec prc_Mesa_Crear '${id}'`);
      return resultado.recordset;
    } else {
      return await getMesaByID(id);
    }
  } catch (error) {
    console.log(error);//TODO: Mostramos el error
    return "error"
  }
}
async function postJuntaMesa(id, name, dni, tel, sexo, edad, cargo, eje, esc) {
  try {
    await pool.connect()
    await pool.request().query(`Exec prc_Mesa_Junta_Crear ${id},'${name}','${dni}','${tel}','${sexo}','${edad}','${cargo}','${eje}','${esc}'`);
    return "exito";
  } catch(error) {
    console.log(error)
    return "error"
  }
}
async function verificarMesa(id) {
  try {
    await pool.connect()//TODO: Conectamos a la base de datos
    const result = await pool.request().query(`Exec prc_Mesa_Buscar '${id}'`);
    return result.recordset.length === 0;
  }
  catch (error) {
    console.log(error);
  }
}
module.exports = { postMesa, postJuntaMesa, verificarMesa, getMesaByID }