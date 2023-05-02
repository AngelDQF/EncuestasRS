const { mesasModel } = require('../models/index.model');
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const ctrPostMesa = async (req, res) => {
  try {
    const { id } = req.body;
    await mesasModel.postMesa(id).then(results => {
      res.json({ results })
    })
  } catch (error) {
    console.log(error)
    handleHttpError(res, 'ERROR_CREAR_MESA_SOLIDARIA');
  }
};
const ctrPostJuntaMesa = async (req, res) => {
  try {
    const { id, name, dni, tel, sexo, edad, cargo, eje, esc } = req.body;
    await mesasModel.postJuntaMesa(id, name, dni, tel, sexo, edad, cargo, eje, esc).then(results => {
      if (results === "error") {
        res.json({ mensaje: "Error al crear junta", estado: 3 });
      } if (results === "exito") {
        res.json({ mensaje:"Junta agregada exitosamente",estado:2 })
      }
    })
  } catch (error) {
    console.log(error)
    handleHttpError(res, 'ERROR_CREAR_MESA_SOLIDARIA');
  }
};
const ctrGetMesaByID = async (req, res) => {
  try {
    const { id } = req.body;
    await mesasModel.getMesaByID(id).then(results => {
      if (results === "error") {
        res.json({ mensaje: "Error al listar mesa solidaria", estado: 3 })
      } else if (results === "vacio") {
        res.json({ mensaje: "No hay ninguna mesa solidaria con ese id", estado: 1 })
      } else {
        res.json({ results })
      }
    })
  } catch (error) {
    console.log(error)
    handleHttpError(res, 'ERROR_LISTAR_MESA_SOLIDARIA');
  }
}
module.exports = { ctrPostMesa, ctrGetMesaByID,ctrPostJuntaMesa };