let pool = require('./config.model');// TODO: Importamos el archivo de configuración

async function postReferencia(uid, name, ext, tipo, id) {
  try {
    await pool.connect()
    await pool.request().query(`Exec prc_Referencia_Crear '${uid}', '${name}', '${ext}', ${tipo}, ${id}`);
    pool.close();
    return "exito";
  } catch (error) {
    console.log(error);
    return "error"
  }
}
async function postReferenciaJunta(id_Ref,miembro,uid) {
  try {
    await pool.connect()
    await pool.request().query(`Exec prc_Referencia_Junta_Crear '${id_Ref}', '${miembro}', '${uid}'`);
    pool.close();
    return "exito";
  } catch (error) {
    console.log(error);
    return "error"
  }
}
module.exports = {postReferencia,postReferenciaJunta}