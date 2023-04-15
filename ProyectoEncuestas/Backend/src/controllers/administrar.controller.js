const { administrarModel } = require('../models/index.model');//TODO: Importamos el modelo de ejes
const { handleHttpError } = require('../utils/handleError');//TODO: Importamos el metodo handleHttpError
const ctrGetEncuestasUser = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const {id}=req.body;
    administrarModel.getEncuestasUser(id).then(results => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({results});//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_ENCUESTAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);ss
  }
};
const ctrGetEncuestasDep = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const {id,idUser}=req.body;
    administrarModel.getEncuestasUserDep(id,idUser).then(results => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({results});//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_ENCUESTAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);ss
  }
};
const ctrGetEncuestasMun = async (req, res) => {//TODO: Creamos la función que se encargará de obtener los usuarios
  try {
    const {id,idUser}=req.body;
    administrarModel.getEncuestasUserMun(id,idUser).then(results => {//TODO: Llamamos a la función del modelo para obtener los usuarios
      res.json({results});//TODO: Mostramos el resultado en un json
    });
  } catch (error) {
    handleHttpError(res, 'ERROR_LISTAR_ENCUESTAS');//TODO: Si surge un error hacemos uso del metodo handleHttpError
    console.log(error);ss
  }
};


module.exports={ctrGetEncuestasUser,ctrGetEncuestasDep,ctrGetEncuestasMun}