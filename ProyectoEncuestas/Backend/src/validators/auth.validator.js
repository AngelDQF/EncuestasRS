const { check } = require('express-validator');//TODO: Importamos el metodo check de express-validators
const { validationResults } = require('../utils/handleValidators');

const validatorLogin = [
  check('email').exists().isEmail().isLength({ min: 1, max: 100 }).withMessage("El dato no debe estar vacio"),
  check('password').exists().isString().isLength({ min: 8, max: 60 }).withMessage("La contraseña debe contener al menos 8 caracteres"),
  (req, res, next) => {
    return validationResults(req, res, next);
  }
];
module.exports={validatorLogin}