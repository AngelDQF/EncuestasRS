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
const ctrGetGradoByID= async (req, res) => {
  try {
    const { id } = req.body;
    escolaridadModel.getGradoByID(id).then(results => {
      res.json({results})
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_GRADOS_ESCOLARIDAD');
  }
}
const ctrGetGradosDesactivados = async (req, res) => {
  try {
    escolaridadModel.getGradosDesactivados().then(result => {
      res.json({results:result})
    });
  } catch{
    handleHttpError(res, 'ERROR_LISTAR_GRADOS_ESCOLARIDAD');
  }
}
const ctrPostGrado = async (req, res) => {
  try {
    const { grado, estado } = req.body;
    const resultado = await escolaridadModel.postGrado(grado, estado);
    if (resultado == "exito") {
      res.json({ results: { mensaje: "Grado de escolaridad agregado exitosamente", estado: 2 } });
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya existe un grado de escolaridad con ese nombre", estado: 1 } });
    } else {
      res.json({
        results: {mensaje: "Ha Ocurrido un error", estado: 3}
      })
    }
  } catch {
    handleHttpError(res, 'Error al crear grado de escolaridad');
  }
}
const ctrPutGradoEstado = async (req, res) => {
  try {
    const { id, estado } = req.body;
    const resultado = await escolaridadModel.putGradoEstado(id, estado);
    if (resultado == "exito") {
      res.json({ results: { mensaje: "Grado de escolaridad actualizado exitosamente", estado: 2 } });
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "No existe un grado de escolaridad con ese id", estado: 1 } });
    } else {
      res.json({
        results: {mensaje: "Ha Ocurrido un error", estado: 3}
      })
    }
  } catch {
    handleHttpError(res, 'Error al actualizar grado de escolaridad');
  }
}
const putNombreGrado = async (req, res) => {	
  try {
    const {id, grado} = req.body;
    const resultado= await escolaridadModel.putGradoNombre(id,grado);
    if(resultado=="exito"){
      res.json({ results: { mensaje: "Grado de escolaridad actualizado exitosamente", estado: 2 } });
    }else if(resultado=="ambiguo"){
      res.json({ results: { mensaje: "Ya existe un grado de escolaridad con ese nombre", estado: 1 } });
    }else{
      res.json({
        results: {mensaje: "Ha ocurrido un error al actualizar grado de escolaridad", estado: 3}
      })
    }
  } catch (error) {
   handleHttpError(res, 'Error al actualizar grado de escolaridad'); 
   console.log(error);
  }
}
module.exports = {ctrGetGrados,ctrGetGradosDesactivados,ctrPostGrado,ctrPutGradoEstado,ctrGetGradoByID,putNombreGrado}