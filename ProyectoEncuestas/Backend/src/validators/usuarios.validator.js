const { check } = require('express-validator');//TODO: Importamos el metodo check de express-validators
const { validationResults } = require('../utils/handleValidators');

const validatorCreateUsuario = [
  check('nombre').exists().isString().isLength({ min: 1, max: 50 }).withMessage("El dato no debe estar vacio"),
  check('telefono').exists().isString(),
  check('dni').exists().isString().isLength({ min: 1, max: 25 }).withMessage("El dato no debe estar vacio"),
  check('correo').exists().isEmail().isLength({ min: 1, max: 100 }).withMessage("El dato no debe estar vacio"),
  check('contra').exists().isString().isLength({ min: 8, max: 60 }).withMessage("La contraseña debe contener al menos 8 caracteres"),
  check('estado').exists().isNumeric().withMessage("El dato debe ser numerico"),
  check('tipo').exists().isNumeric().withMessage("El dato debe ser numerico"),
  check('sexo').exists().isString().isLength({ min: 1, max: 30 }).withMessage("El dato no debe estar vacio"),
  (req, res, next) => {
    return validationResults(req, res, next);
  }
];
module.exports={validatorCreateUsuario}
