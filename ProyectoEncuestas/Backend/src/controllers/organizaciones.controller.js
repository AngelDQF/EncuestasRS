const { organizacionesModel } = require('../models/index.model');//TODO: Importamos el modelo de las organizaciones
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const ctrGetOrganizaciones = async (req, res) => {
  try {
    organizacionesModel.getOrganizaciones().then(result => {
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ORGANIZACIONES');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetOrganizacionById = async (req, res) => {
  try {
    const { id } = req.body;
    organizacionesModel.getOrganizacion(id).then(results => {
      res.json({ results })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ORGANIZACIÓN');
  }
}
const ctrGetOrganizacionesDesactivadas = async (req, res) => {
  try {
    organizacionesModel.getOrganizacionesDesactivadas().then(result => {
      res.json({ results: result })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ORGANIZACIONES_DESACTIVADAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetTiposOrganizaciones = async (req, res) => {
  try {
    organizacionesModel.getTipoOrganizaciones().then(result => {
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_TIPOS_ORGANIZACIONES');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetTipoOrganizacionById = async (req, res) => {
  try {
    const { id } = req.body;
    organizacionesModel.getTipoOrganizacion(id).then(result => {
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_TIPO_ORGANIZACIÓN');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetTiposOrgDes = async (req, res) => {//TODO: Funcion para hacer get a las Organizaciones Desactivadas
  try {
    organizacionesModel.getTipoOrganizacionesDesactivadas().then(result => {
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_TIPOS_ORGANIZACIONES_DESACTIVADAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPostOrg = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo

    const { tipo, social, org, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await organizacionesModel.postOrg(tipo, social, org, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Organización Agregada Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe una Organización con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_ORGANIZACIÓN');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutOrg = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo

    const { id, org } = req.body;//TODO: Extraemos los datos del body
    const resultado = await organizacionesModel.putOrg(id, org);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Los datos de la organización se editaron correctamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe una Organización con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningúna organización", estado: 1 } });//TODO: Mostramos el resultado en un json
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_ORGANIZACIÓN');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutOrgDatos = async (req, res) => {
  try {
    const {id, tipo,social } = req.body;
    const resultado = await organizacionesModel.putOrgDatos(id, tipo,social);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Los datos de la organización se editaron correctamente", estado: 2 } });
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningúna organización", estado: 1 } });
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_ORGANIZACIÓN');
  }
}
const ctrPutOrgEstado = async (req, res) => {
  try {

    const { id, estado } = req.body;
    const resultado = await organizacionesModel.putOrgEstado(id, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "El estado se cambio correctamente", estado: 2 } });
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningúna organización", estado: 1 } });
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_ORGANIZACIÓN_ESTADO');
  }
}
const ctrPostTipoOrg = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo

    const { tipo, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await organizacionesModel.postTipoOrg(tipo, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Organización Agregada Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe una Organización con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_ORGANIZACIÓN');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutTipoOrg = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo

    const { id, tipo } = req.body;//TODO: Extraemos los datos del body
    const resultado = await organizacionesModel.putTipoOrg(id, tipo);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "El tipo de organización se actualizo correctamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un tipo de organización con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún tipo de organización", estado: 1 } });//TODO: Mostramos el resultado en un json
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_TIPO_ORGANIZACIÓN');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutTipoOrgEstado = async (req, res) => {
  try {
    const { id, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await organizacionesModel.putTipoOrgEstado(id, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "El estado se cambio correctamente", estado: 2 } });
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún tipo de organización", estado: 1 } });
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_TIPO_ORGANIZACIÓN_ESTADO');
  }
}

module.exports = { ctrGetTiposOrganizaciones, ctrGetOrganizacionesDesactivadas, ctrGetTiposOrgDes, ctrGetOrganizaciones, ctrPostOrg, ctrPutOrg, ctrPutOrgEstado,ctrPutOrgDatos,ctrPostTipoOrg,ctrPutTipoOrg, ctrPutTipoOrgEstado,ctrGetOrganizacionById,ctrGetTipoOrganizacionById};//TODO: Exportamos las funciones del controlador