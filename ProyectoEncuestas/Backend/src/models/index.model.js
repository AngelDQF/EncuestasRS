//TODO: Archivo que exporta todos los modelos de la base de datos
const model = {//TODO: Exportamos todos los modelos hijos
  authModel:require('./auth.model'),//TODO: Exportamos el modelo de autenticación
  usuariosModel: require('./usuarios.model'),//TODO: Exportamos el modelo de usuarios
  ejesModel: require('./ejes.model'),//TODO: Exportamos el modelo de ejes
  cargoModel:require('./cargos.model'),//TODO: Exportamos el modelo de Cargos
  organizacionesModel:require('./organizaciones.model'),//TODO: Exportamos el modelo de Organizaciones
  serviciosModel:require('./servicios.model'),//TODO: Exportamos el modelo de Servicios
  naturalesModel:require('./naturales.model'),//TODO: Exportamos el modelo de Naturales
  financiamientosModel:require('./financiamientos.model'),//TODO: Exportamos el modelo de Financiamientos
  requerimientosModel:require('./requerimientos.model'),//TODO: Exportamos el modelo de Requerimientoss
  encuestasModel:require('./encuestas.model'),//TODO:Exportamos el modelo de Encuestas
  ubicacionesModel:require('./ubicaciones.model'),//TODO: Exportamos el modelo de las Ubicaciones
  escolaridadModel:require('./escolaridad.model'),//TODO: Exportamos el modelo los Grados de Escolaridad
  administrarModel:require('./administrar.model'),//TODO: Exportamos el modelo de Administrar
  configModel:require('./config.model'),//TODO: Exportamos el modelo de Configuración
  sesionModel:require('./sesion.model'),//TODO: Exportamos el modelo de Sesión
  mesasModel:require('./mesas.model'),//TODO: Exportamos el modelo de las Mesas Solidarias
  refModel:require('./referencias.model'),//TODO: Exportamos el modelo de las referencias
};
module.exports = model;//TODO: Exportamos el modelo padre