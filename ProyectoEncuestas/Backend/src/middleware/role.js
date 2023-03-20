const { handleHttpError } = require('../utils/handleError');

/**
 * TODO: 
 * @param {*} rol 
 * @returns 
 */
const checkTipo = (tipo) => (req, res, next) => {
  try {
    const {user}=req;
    const tipoByUser=user[0].tipo;
    console.log(tipoByUser);
    const checkValueTipo=tipo.some((tipoSingle)=>
      tipoByUser.includes(tipoSingle)
    );
    if(!checkValueTipo){
      handleHttpError(res,"USER_NOT_PERMISSIONS",403);
      return;
    }
    next();
  } catch (error){
        handleHttpError(res,"ERROR_PERMISSIONS",403);
  }
}


module.exports = { checkTipo };