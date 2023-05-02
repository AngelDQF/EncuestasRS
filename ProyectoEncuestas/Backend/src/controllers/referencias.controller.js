const { refModel } = require('../models/index.model');
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrPostReferencia = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { uid, name, ext, tipo, id } = req.body;//TODO: Extraemos los datos del body
    const resultado = await refModel.postReferencia(uid, name, ext, tipo, id);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Referencia Agregada Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else {
      res.json({ results: { mensaje: "Ha Ocurrido un error", estado: 3 } })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_ORGANIZACIÓN');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}

const ctrPostReferenciaJunta = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { id,miembro,uid } = req.body;//TODO: Extraemos los datos del body
    const resultado = await refModel.postReferenciaJunta(id,miembro,uid);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Referencia Agregada Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else {
      res.json({ results: { mensaje: "Ha Ocurrido un error", estado: 3 } })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_ORGANIZACIÓN');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}

module.exports = { ctrPostReferencia,ctrPostReferenciaJunta }