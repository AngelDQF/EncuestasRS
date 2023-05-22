const { check } = require('express-validator');
const { validationResults } = require('../utils/handleValidators');

const validatorCreateCargo = [
  check('cargo').exists().isString().isLength({ min: 1, max: 30 }).withMessage("No puedes crear un Cargo sin nombre"),
  check('estado').exists().notEmpty().isBoolean(),
  (req, res, next) => {
    return validationResults(req, res, next);
  }
];
const validatorGetCargoByID=[
  check('id').exists().isInt().notEmpty().isLength({ min: 1 }).withMessage("No has ingresado una ID"),//TODO: Validamos que el campo id exista, sea un entero y tenga una longitud mínima de 1
]
const validatorPutCargo=[
  check('id').exists().notEmpty().isInt().isLength({ min: 1 }).withMessage("No has ingresado una ID"),//TODO: Validamos que el campo id exista, sea un entero y tenga una longitud mínima de 1
  check('cargo').exists().notEmpty().isString().isLength({ min: 1, max: 30 }).withMessage("No puedes editar un Cargo sin nombre"),
]
const validatorPutCargoEstado=[
  check('id').exists().isInt().isLength({ min: 1 }).withMessage("No has ingresado una ID"),//TODO: Validamos que el campo id exista, sea un entero y tenga una longitud mínima de 1
  check('estado').exists().isBoolean().notEmpty().withMessage("No has ingresado un estado valido"),
]
module.exports = { validatorCreateCargo,validatorGetCargoByID,validatorPutCargo,validatorPutCargoEstado}//TODO: Exportamos los metodos