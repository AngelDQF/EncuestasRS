const { refModel } = require('../models/index.model');
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetActas = async (req, res) => {//TODO: Funcion para hacer get a las referencias de las actas
  try {
    await refModel.getReferenciasActas().then(results => {//TODO: Ejecutamos la funcion del modelo
      res.json({ results })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_REFERENCIAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetActasByDep = async (req, res) => {
  try {
    const { id } = req.body
    if (id === "") {
      console.log("Vacio")
      return
    }
    refModel.getReferenciasActasByDep(id).then(results => {
      res.json({ results });
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_REFERENCIAS');
    console.log(error);
  }
};
const ctrGetActasByMun = async (req, res) => {
  try {
    const { id } = req.body
    if (id === "") {
      console.log("Vacio")
      return
    }
    refModel.getReferenciasActasByMun(id).then(results => {
      res.json({ results });
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_REFERENCIAS');
    console.log(error);
  }
};
const ctrGetDNIByDep = async (req, res) => {
  try {
    const { id } = req.body
    if (id === "") {
      console.log("Vacio")
      return
    }
    refModel.getReferenciasDNIByDep(id).then(results => {
      res.json({ results });
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_REFERENCIAS');
    console.log(error);
  }
};
const ctrGetDNIByMun = async (req, res) => {
  try {
    const { id } = req.body
    if (id === "") {
      console.log("Vacio")
      return
    }
    refModel.getReferenciasDNIByMun(id).then(results => {
      res.json({ results });
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_REFERENCIAS');
    console.log(error);
  }
};
const ctrGetDNI = async (req, res) => {//TODO: Funcion para hacer get a las referencias de las actas
  try {
    await refModel.getReferenciasDNI().then(results => {//TODO: Ejecutamos la funcion del modelo
      res.json({ results })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_REFERENCIAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPostReferenciaActa = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { uid, name, ext, tipo, id } = req.body;//TODO: Extraemos los datos del body
    const resultado = await refModel.postReferenciaActa(uid, name, ext, tipo, id);
    if (resultado == 'exito-post') {
      res.json({ results: { mensaje: "Referencia Agregada Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == 'error') {
      res.json({ results: { mensaje: "Ha Ocurrido un error", estado: 3 } })
    }
    else {
      res.json({ results: { mensaje: "Referencia Actualizada Exitosamente", estado: 2, code: resultado, put: true } });//TODO: Mostramos el resultado en un json
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_ORGANIZACIÓN');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}

const ctrPostReferenciaJunta = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { miembro, uid, name, ext, tipo, id } = req.body;//TODO: Extraemos los datos del body
    const resultado = await refModel.postReferenciaJunta(miembro, uid, name, ext, tipo, id);
    if (resultado == 'exito-post') {
      res.json({ results: { mensaje: "Referencia Agregada Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == 'error') {
      res.json({ results: { mensaje: "Ha Ocurrido un error", estado: 3 } })
    } else {
      res.json({ results: { mensaje: "Referencia Actualizada Exitosamente", estado: 2, code: resultado, put: true } });//TODO: Mostramos el resultado en un json
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_ORGANIZACIÓN');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}

module.exports = { ctrGetActas, ctrGetActasByDep, ctrGetDNI, ctrPostReferenciaActa, ctrPostReferenciaJunta, ctrGetDNIByDep, ctrGetDNIByMun, ctrGetActasByMun }