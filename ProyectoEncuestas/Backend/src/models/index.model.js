//TODO: Archivo que exporta todos los modelos de la base de datos
const model = {//TODO: Exportamos todos los modelos hijos
  aldeasModel: require('./aldeas.model'),//TODO: Exportamos el modelo de Aldeas
  usuariosModel: require('./usuarios.model'),//TODO: Exportamos el modelo de usuarios
  ejesModel: require('./ejes.model'),//TODO: Exportamos el modelo de ejes
  ubicacionModel: require('./ubicacion.model'),//TODO: Exportamos el modelo de ubicacion
  departamentosModel: require('./departamentos.model'),//TODO: Exportamos el modelo de departamentos
  cargoModel:require('./cargos.model'),//TODO: Exportamos el modelo de Cargos
  organizacionesModel:require('./organizaciones'),//TODO: Exportamos el modelo de Organizaciones
  serviciosModel:require('./servicios.model'),//TODO: Exportamos el modelo de Servicios
  naturalesModel:require('./naturales.model'),//TODO: Exportamos el modelo de Naturales

};
module.exports = model;//TODO: Exportamos el modelo padre