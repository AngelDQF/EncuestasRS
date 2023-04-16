const { ejesModel } = require('../models/index.model');
const { handleHttpError } = require('../utils/handleError');

const ctrGetEjes = async (req, res) => {
  try {
    ejesModel.getEjes().then(result => {
      res.json({ results: result })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_EJES');
  }
}
const ctrBuscarEjeByID= async (req,res)=>{
    try{
      const {id}=req.body;
      ejesModel.getEjeID(id).then(results=>{
        res.json({results})
      })
    } catch {
      handleHttpError(res, 'ERROR_LISTAR_EJES_DESACTIVADOS');
    }
}
const ctrGetEjesDesactivados = async (req, res) => {
  try {
    ejesModel.getEjesDesactivados().then(result => {
      res.json({ results: result })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_EJES_DESACTIVADOS');
  }

}

const ctrPostEje = async (req, res) => {
  try {
    const { eje, estado } = req.body;
    const resultado = await ejesModel.postEjes(eje, estado);
    if (resultado == "exito") {
      res.json({ results: { mensaje: "Eje Agregado exitosamente", estado: 2 } });
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un eje con ese nombre", estado: 1 } });
    } else {
      res.json({
        results: {mensaje: "Ha Ocurrido un error", estado: 3}
      })
    }
  } catch {
    handleHttpError(res, 'Error al crear eje');
  }
}
const ctrPutEje = async (req, res) => {
  try {
    const { id, eje } = req.body;
    const resultado = await ejesModel.putEjeNombre(id, eje);
    if (resultado == "exito") {
      res.json({ results: { mensaje: "Eje Editado Correctamento", estado: 2 } });
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un eje con ese nombre", estado: 1 } });
    } else {
      res.json({
        results: {mensaje: "Ha Ocurrido un error", estado: 3}
      })
    }
  } catch {
    handleHttpError(res, 'Error al editar eje');
  }
}

const ctrPutEjeEstado = async (req, res) => {
  try {
    const { id, estado } = req.body;
    const resultado = await ejesModel.putEjeEstado(id, estado);
    res.json(resultado);
  } catch {
    handleHttpError(res, 'Error al Actualizar Estado');
  }
}

module.exports = { ctrGetEjes, ctrGetEjesDesactivados, ctrPostEje, ctrPutEje, ctrPutEjeEstado,ctrBuscarEjeByID };