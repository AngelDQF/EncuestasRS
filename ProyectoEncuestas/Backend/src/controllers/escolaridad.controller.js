const { escolaridadModel } = require('../models/index.model');
const { handleHttpError } = require('../utils/handleError');

const ctrGetGrados = async (req, res) => {
  try {
    escolaridadModel.getGrados().then(result => {
      res.json({results:result})
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_GRADOS_ESCOLARIDAD');
  }
}
module.exports = {ctrGetGrados}