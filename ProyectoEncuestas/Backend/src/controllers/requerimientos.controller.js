const { requerimientosModel } = require('../models/index.model');//TODO: Importamos el modelo de Naturales
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError

const ctrGetMercados = async (req, res) => {//TODO: Controlador para hacer get a los Tipos de Financiamientos
  try {
    requerimientosModel.getMercados().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_MERCADOS_');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetMercadosDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Tipos de Financiamientos Desactivados
  try {
    requerimientosModel.getMercadosDesactivados().then(result => {//TODO: Ejecutamos la funcion getUsoTierras del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_MERCADOS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetUsosTierra = async (req, res) => {//TODO: Controlador para hacer get a los Fuentes de Financiamientos
  try {
    requerimientosModel.getUsosTierra().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_USOS_TIERRA');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetUsosTierraDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Fuentes de Financiamientos Desactivados
  try {
    requerimientosModel.getUsosTierraDesactivados().then(result => {//TODO: Ejecutamos la funcion getUsoTierras del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_USOS_TIERRA_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetEstructuras = async (req, res) => {//TODO: Controlador para hacer get a los Fuentes de Financiamientos
  try {
    requerimientosModel.getEstructuras().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ESTRUCTURAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetEstructurasDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Fuentes de Financiamientos Desactivados
  try {
    requerimientosModel.getEstructurasDesactivados().then(result => {//TODO: Ejecutamos la funcion getUsoTierras del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ESTRUCTURAS_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetTenenciaTierra = async (req, res) => {//TODO: Controlador para hacer get a los Fuentes de Financiamientos
  try {
    requerimientosModel.getTenenciaTierra().then(result => {//TODO: Ejecutamos la funcion getBosuqes del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_TENENCIAS_TIERRA');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrGetTenenciaTierraDesactivados = async (req, res) => {//TODO: Funcion para hacer get a los Fuentes de Financiamientos Desactivados
  try {
    requerimientosModel.getTenenciaTierraDesactivados().then(result => {//TODO: Ejecutamos la funcion getUsoTierras del modelo
      res.json({ results: result })//TODO: Mostramos el resultado en un json
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_TENENCIAS_TIERRA_DESACTIVADOS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
//Mercados
const ctrGetMercadoById = async (req, res) => {
  try {
    const { id } = req.body;
    await requerimientosModel.getMercado(id).then(results => {
      res.json({ results })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_MERCADO');
  }
}
const ctrPostMercado = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { mercado, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await requerimientosModel.postMercado(mercado, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Mercado Agregado Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Mercado con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_MERCADO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutMercado = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { id, mercado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await requerimientosModel.putMercado(id, mercado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Mercado editado exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Mercado con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningúna Mercado", estado: 1 } });//TODO: Mostramos el resultado en un json
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_MERCADO');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutMercadoEstado = async (req, res) => {
  try {

    const { id, estado } = req.body;
    const resultado = await requerimientosModel.putMercadoEstado(id, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "El estado se cambio correctamente", estado: 2 } });
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningúna Mercado", estado: 1 } });
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_MERCADO_ESTADO');
  }
}
//Usos Tierra
const ctrGetUsoTierraById = async (req, res) => {
  try {
    const { id } = req.body;
    await requerimientosModel.getUsoTierra(id).then(results => {
      res.json({ results })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_USO_TIERRA');
  }
}
const ctrPostUsoTierra = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { uso, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await requerimientosModel.postUsoTierra(uso, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Uso de la Tierra Agregado Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Uso de la Tierra con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_USO_TIERRA');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutUsoTierra = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { id, uso } = req.body;//TODO: Extraemos los datos del body
    const resultado = await requerimientosModel.putUsoTierra(id, uso);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Uso de la Tierra editado exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Uso de la Tierra con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún Uso de la Tierra", estado: 1 } });//TODO: Mostramos el resultado en un json
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_USO_TIERRA');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutUsoTierraEstado = async (req, res) => {
  try {

    const { id, estado } = req.body;
    const resultado = await requerimientosModel.putUsoTierraEstado(id, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "El estado se cambio correctamente", estado: 2 } });
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún Uso de la Tierra", estado: 1 } });
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_USO_TIERRA_ESTADO');
  }
}
//Estructuras
const ctrGetEstructuraById = async (req, res) => {
  try {
    const { id } = req.body;
    await requerimientosModel.getEstructura(id).then(results => {
      res.json({ results })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_ESTRUCTURA');
  }
}
const ctrPostEstructura = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { estructura, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await requerimientosModel.postEstructura(estructura, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Estructura Agregada Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe una Estructura con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_ESTRUCTURA');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutEstructura = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { id, estructura } = req.body;//TODO: Extraemos los datos del body
    const resultado = await requerimientosModel.putEstructura(id, estructura);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Estructura editada exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe una Estructura con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningúna Estructura", estado: 1 } });//TODO: Mostramos el resultado en un json
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_ESTRUCTURA');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutEstructuraEstado = async (req, res) => {
  try {

    const { id, estado } = req.body;
    const resultado = await requerimientosModel.putEstructuraEstado(id, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "El estado se cambio correctamente", estado: 2 } });
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningúna Estructura", estado: 1 } });
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_ESTRUCTURA_ESTADO');
  }
}
//Tenencia Tierra
const ctrGetTenenciaById = async (req, res) => {
  try {
    const { id } = req.body;
    await requerimientosModel.getTenencia(id).then(results => {
      res.json({ results })
    });
  } catch {
    handleHttpError(res, 'ERROR_LISTAR_TENENCIA_TIERRA');
  }
}
const ctrPostTenencia = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { tenencia, estado } = req.body;//TODO: Extraemos los datos del body
    const resultado = await requerimientosModel.postTenenciaTierra(tenencia, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Tipo de Tenencia de Tierra Agregado Exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Tipo de Tenencia de Tierra con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_POST_TENENCIA_TIERRA');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutTenencia = async (req, res) => {
  try {//TODO: Intentamos ejecutar el codigo
    const { id, tenencia } = req.body;//TODO: Extraemos los datos del body
    const resultado = await requerimientosModel.putTenenciaTierra(id, tenencia);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "Tipo de Tenencia de Tierra editado exitosamente", estado: 2 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == "ambiguo") {
      res.json({ results: { mensaje: "Ya Existe un Tipo de Tenencia de Tierra con ese nombre", estado: 1 } });//TODO: Mostramos el resultado en un json
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún Tipo de Tenencia de Tierra", estado: 1 } });//TODO: Mostramos el resultado en un json
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_TENENCIA_TIERRA');//TODO: Si surge un error hacemos uso del metodo handleHttpError
  }
}
const ctrPutTenenciaEstado = async (req, res) => {
  try {

    const { id, estado } = req.body;
    const resultado = await requerimientosModel.putTenenciaTierraEstado(id, estado);
    if (resultado == 'exito') {
      res.json({ results: { mensaje: "El estado se cambio correctamente", estado: 2 } });
    } else if (resultado == 'vacio') {
      res.json({ results: { mensaje: "El ID ingresado no corresponde a ningún Tipo de Tenencia de Tierra", estado: 1 } });
    }
    else {
      res.json({
        results: {
          mensaje: "Ha Ocurrido un error", estado: 3
        }
      })
    }
  } catch {
    handleHttpError(res, 'ERROR_PUT_TENENCIA_TIERRA_ESTADO');
  }
}

module.exports = { ctrGetMercados, ctrGetMercadosDesactivados, ctrGetUsosTierra, ctrGetUsosTierraDesactivados, ctrGetEstructuras, ctrGetEstructurasDesactivados, ctrGetTenenciaTierra, ctrGetTenenciaTierraDesactivados, ctrGetMercadoById, ctrPostMercado, ctrPutMercado, ctrPutMercadoEstado, ctrGetUsoTierraById, ctrPostUsoTierra, ctrPutUsoTierra, ctrPutUsoTierraEstado, ctrGetEstructuraById, ctrPostEstructura, ctrPutEstructura, ctrPutEstructuraEstado, ctrGetTenenciaById, ctrPostTenencia, ctrPutTenencia, ctrPutTenenciaEstado };//TODO: Exportamos las funciones del controlador