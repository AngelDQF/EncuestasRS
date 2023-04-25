const { encuestasModel } = require('../models/index.model');//TODO: Importamos el modelo de Naturales
const { naturalesModel } = require('../models/index.model');
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetEncuestas = async (req, res) => {
  try {
    encuestasModel.getEncuestas().then(result => {
      res.json({ results: result })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ENCUESTAS');
  }
}
const ctrGetDepartamentosUsuario = async (req, res) => {
  try {
    const { id } = req.body
    if (id === "") {
      return
    }
    encuestasModel.getDepartamentosUsuario(id).then(result => {
      res.json({ results: result });
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_DEPARTAMENTOS');
    console.log(error);
  }
};
const ctrGetMunicipiosUsuario = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const { id, dep } = await req.body
    encuestasModel.getMunicipiosUsuario(id, dep).then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({ results: result });//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_MUNICIPIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);
  }
};
const ctrGetAldeasUsuario = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const { id } = await req.body
    encuestasModel.getAldeasUsuario(id).then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({ results: result });//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_ALDEAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);
  }
};
const ctrGetCaseriosUsuario = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const { id } = await req.body
    encuestasModel.getCaseriosUsuario(id).then(result => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({ results: result });//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_CASERIOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);
  }
};
const ctrGetOrganizacion = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    encuestasModel.getOrganizacion().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ORGANIZACION');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetOrgLocales = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    encuestasModel.getOrgLocales().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ORGANIZACIONES');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetOrganizacionesSociales = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    encuestasModel.getOrganizacionesSociales().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ORGANIZACION');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetSuelos = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    naturalesModel.getSuelos().then(result => {//TODO: Ejecutamos la funcion getSuelosDesactivados del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_SUELOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetEstructurasEncuestas = async (req, res) => {//TODO: Controlador para hacer get a los Fuentes de Financiamientos
  try {
    encuestasModel.getEstructurasEncuestas().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ESTRUCTURAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetEstadosEncuestas = async (req, res) => {//TODO: Controlador para hacer get a los Fuentes de Financiamientos
  try {
    encuestasModel.getEstadosEncuestas().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ESTADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetTecnologicoEncuestas = async (req, res) => {//TODO: Controlador para hacer get a los Fuentes de Financiamientos
  try {
    encuestasModel.getTecnologicoEncuestas().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_NIVEL_TECNOLOGICO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPostEncuesta = async (req, res) => {
  try {
    const { hombres, mujeres, total, dep, mun, aldea, caserio, address, org, rios, cant_rios, bosques, tipo_bosque, suelo, tenencia, mercado, tecno, user } = req.body;
    await encuestasModel.postEncuesta(hombres, mujeres, total, dep, mun, aldea, caserio, address, org, rios, cant_rios, bosques, tipo_bosque, suelo, tenencia, mercado, tecno, user).then(results => {
      res.json({ "results": { mensaje: results[0].id_Encuesta, estado: 1 } })

    });
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'error');
  }
}
const ctrPostGeoUbicacion = async (req, res) => {
  try {
    const { id, lon, lat } = req.body;
    const consulta = await encuestasModel.postGeoUbicacion(id, lon, lat);
    if (consulta === "exito") {
      res.json({ "results": { mensaje: "Geo Ubicación agregada exitosamente", estado: 2 } })
    } else {
      res.json({ "results": { mensaje: "Error al agregar la Geo Ubicación", estado: 3 } })
    }
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_NIVEL_TECNOLOGICO');
  }
}
const ctrPostJunta = async (req, res) => {
  try {
    const { id, cargo, eje, dni, name, tel, sexo, edad, esc } = req.body;
    const resultado = await encuestasModel.postJunta(id, cargo, eje, dni, name, tel, sexo, edad, esc);
    if (resultado === "exito") {
      res.json({ results: { mensaje: "Miembro Agregado Exitosamente", estado: 2 } })
    } else {
      res.json({ results: { mensaje: "Error al Agregar Miembro", estado: 3 } })
    }
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_POST_JUNTA');
  }
}
const ctrPostServBasico = async (req, res) => {
  try {
    const { id, idServ } = req.body;
    const resultado = await encuestasModel.postServBasico(id, idServ);
    if (resultado === "exito") {
      res.json({ results: { mensaje: "Servicio Basico Agregado Exitosamente", estado: 2 } })
    } else {
      res.json({ results: { mensaje: "Error al Agregar Servicio Basico", estado: 3 } })
    }
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_POST_SERVICIO_BASICO');
  }
}
const ctrPostServLocal = async (req, res) => {
  try {
    const { id, idServ } = req.body;
    const resultado = await encuestasModel.postServLocal(id, idServ);
    if (resultado === "exito") {
      res.json({ results: { mensaje: "Servicio Local Agregado Exitosamente", estado: 2 } })
    } else {
      res.json({ results: { mensaje: "Error al Agregar Servicio Local", estado: 3 } })
    }
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_POST_SERVICIO_LOCAL');
  }
}
const ctrPostDetalleOrg = async (req, res) => {
  try {
    const { id, idOrg } = req.body;
    const resultado = await encuestasModel.postDetalleOrg(id, idOrg);
    if (resultado === "exito") {
      res.json({ results: { mensaje: "Organización Agregado Exitosamente", estado: 2 } })
    } else {
      res.json({ results: { mensaje: "Error al Agregar Organización", estado: 3 } })
    }
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_POST_DETALLE_ORG');
  }
}
const ctrPostDetalleImportacion = async (req, res) => {
  try {
    const { id, importacion } = req.body;
    const resultado = await encuestasModel.postDetalleImportacion(id, importacion);
    if (resultado === "exito") {
      res.json({ results: { mensaje: "Importación Agregado Exitosamente", estado: 2 } })
    } else {
      res.json({ results: { mensaje: "Error al Agregar Importación", estado: 3 } })
    }
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_POST_DETALLE_IMPORTACIÓN');
  }
}
const ctrPostDetalleExportacion = async (req, res) => {
  try {
    const { id, exportacion } = req.body;
    const resultado = await encuestasModel.postDetalleExportacion(id, exportacion);
    if (resultado === "exito") {
      res.json({ results: { mensaje: "Exportación Agregado Exitosamente", estado: 2 } })
    } else {
      res.json({ results: { mensaje: "Error al Agregar Exportación", estado: 3 } })
    }
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_POST_DETALLE_EXPORTACIÓN');
  }
}
const ctrPostDetalleUsoTierra = async (req, res) => {
  try {
    const { id, uso } = req.body;
    const resultado = await encuestasModel.postDetalleUsoTierra(id, uso);
    if (resultado === "exito") {
      res.json({ results: { mensaje: "Detalle de Uso de la Tierra Agregado Exitosamente", estado: 2 } })
    } else {
      res.json({ results: { mensaje: "Error al Agregar Detalle de Uso de la Tierra", estado: 3 } })
    }
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_POST_DETALLE_USO_TIERRA');
  }
}
const ctrPostDetalleFinanciamiento = async (req, res) => {
  try {
    const { id, tipo, fuente, observacion } = req.body;
    const resultado = await encuestasModel.postDetalleFinanciamiento(id, tipo, fuente, observacion);
    if (resultado === "exito") {
      res.json({ results: { mensaje: "Detalla de Financiamiento Agregado Exitosamente", estado: 2 } })
    } else {
      res.json({ results: { mensaje: "Error al Agregar Detalla de Financiamiento", estado: 3 } })
    }
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_POST_DETALLE_FINANCIAMIENTO');
  }
}
const ctrPostDetalleRequerimiento = async (req, res) => {
  try {
    const { id, estructura, estado, observacion } = req.body;
    const resultado = await encuestasModel.postDetalleRequerimiento(id, estructura, estado, observacion);
    if (resultado === "exito") {
      res.json({ results: { mensaje: "Detalla de Requerimiento de inversión Social Agregado Exitosamente", estado: 2 } })
    } else {
      res.json({ results: { mensaje: "Error al Agregar Detalla de Requerimiento de inversión Social", estado: 3 } })
    }
  } catch (error) {
    console.log(error);
    handleHttpError(res, 'ERROR_POST_DETALLE_REQUERIMIENTO');
  }
}
const ctrGetJuntaByID = async (req, res) => {
  try {
    const {id}=req.body
    encuestasModel.getJuntaByID(id).then(results => {
      if(results==="error"){
        res.json({results:[{mensaje:"Ha ocurrido un error",state:3}]})
      }else if(results==="vacio"){
        res.json({results:[{mensaje:"No hay junta directiva agregada",state:1}]})
      }else{
                res.json({results});
      }
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_JUNTA_DIRECTIVA');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}

module.exports = { ctrGetEncuestas, ctrGetDepartamentosUsuario, ctrGetOrganizacion, ctrGetSuelos, ctrGetOrganizacionesSociales, ctrGetMunicipiosUsuario, ctrPostEncuesta, ctrGetAldeasUsuario, ctrGetCaseriosUsuario, ctrGetEstructurasEncuestas, ctrGetEstadosEncuestas, ctrGetTecnologicoEncuestas, ctrGetOrgLocales, ctrPostGeoUbicacion, ctrPostJunta, ctrPostServBasico, ctrPostServLocal, ctrPostDetalleOrg, ctrPostDetalleImportacion, ctrPostDetalleExportacion, ctrPostDetalleUsoTierra, ctrPostDetalleFinanciamiento, ctrPostDetalleRequerimiento,ctrGetJuntaByID };//TODO: Exportamos las funciones del controlador