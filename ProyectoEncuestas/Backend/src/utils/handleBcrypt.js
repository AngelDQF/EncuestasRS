const bcrypt = require('bcryptjs');//TODO: Importamos el módulo de encriptación de contraseñas
/**
 * TODO: Funcion para encriptar la contraseña
 * @param {*} contra 
 * @returns 
 */
const encrypt = async (contra) => {//TODO: Creamos la función que se encargará de encriptar la contraseña
  const hash = await bcrypt.hash(contra, 10);//TODO: Encriptamos la contraseña con el método hash
  return hash;//TODO: Retornamos la contraseña encriptada
}
const compare = async (contra, contraHash) => {//TODO: Creamos la función que se encargará de comparar la contraseña encriptada con la contraseña ingresada
  const compare = await bcrypt.compare(contra, contraHash);
  return compare;//TODO: Retornamos el resultado de la comparación true o false
}
module.exports = { encrypt, compare };//TODO: Exportamos las funciones