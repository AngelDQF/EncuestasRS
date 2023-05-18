const { check } = require('express-validator');//TODO: Importamos el metodo check de express-validators
const { validationResults } = require('../utils/handleValidators');

const validatorGetEncuestasUser=[
  check('id').exists().isInt().isLength({ min: 1 }).withMessage("No has ingresado una ID"),//TODO: Validamos que el campo id exista, sea un entero y tenga una longitud mínima de 1
]
const validatorGetEncuestasUbicacion=[
  check('id').exists().isInt().isLength({ min: 1 }).withMessage("No has ingresado una ID"),//TODO: Validamos que el campo id exista, sea un entero y tenga una longitud mínima de 1
  check('idUser').exists().isInt().isLength({ min: 1 }).withMessage("No has ingresado una ID"),//TODO: Validamos que el campo id exista, sea un entero y tenga una longitud mínima de 1

]
module.exports={validatorGetEncuestasUser,validatorGetEncuestasUbicacion};