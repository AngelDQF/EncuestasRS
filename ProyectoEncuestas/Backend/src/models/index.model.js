//TODO: Archivo que exporta todos los modelos de la base de datos
const model = {//TODO: Exportamos todos los modelos hijos
  aldeasModel: require('./aldeas.model'),//TODO: Exportamos el modelo de Aldeas
  usuariosModel: require('./usuarios.model'),//TODO: Exportamos el modelo de usuarios
  ejesModel: require('./ejes.model'),//TODO: Exportamos el modelo de ejes
  ubicacionModel: require('./ubicacion.model'),//TODO: Exportamos el modelo de ubicacion
  departamentosModel: require('./departamentos.model'),//TODO: Exportamos el modelo de departamentos
  cargoModel:require('./cargos.model'),//TODO: Exportamos el modelo de Cargos



};
module.exports = model;//TODO: Exportamos el modelo padre