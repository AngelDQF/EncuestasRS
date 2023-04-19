const { sesionModel } = require('../models/index.model');
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const { encrypt } = require('../utils/handleBcrypt');//TODO: Importamos las funciones de encriptación y comparación de contraseñas

const ctrCrearA = async (req, res) => {
  try {
    const { key, contra } = req.body;
    const eContra = await encrypt(contra);//TODO: Encriptamos la contraseña

    const resultado = await sesionModel.createA(key, eContra);
    if (resultado == "exito") {
      res.json({ results: { mensaje: "Usuario Creado Exitosamente", estado: 2 } });
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Error al crear usuario", estado: 1 } });
    } else {
      res.json({
        results: { mensaje: "Ha Ocurrido un error", estado: 3 }
      })
    }
  } catch (error) {
    handleHttpError(res, 'ERROR_CREAR');
  }
}
module.exports ={
  ctrCrearA
}