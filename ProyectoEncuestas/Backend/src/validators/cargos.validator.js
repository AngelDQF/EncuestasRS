const { check } = require('express-validator');//TODO: Importamos el metodo check de express-validators
const { validationResults } = require('../utils/handleValidators');//TODO: Importamos el metodo validationResults de handleValidators

const validatorCreateCargo = [//TODO: Metodo para validar los campos al momento de crear un item
  check('cargo').exists().isString().isLength({ min: 1, max: 250 }).withMessage("No puedes crear un Cargo sin nombre"),//TODO: Validamos que el campo eje exista, sea un string y tenga una longitud maxima de 250 caracteres
  check('estado').exists().notEmpty().isBoolean(),//TODO: Validamos que el campo estado exista, no este vacio y sea un booleano
  (req, res, next) => {//TODO: Funcion para validar los resultados
    return validationResults(req, res, next);//TODO: Retornamos los resultados de la validacion
  }
];

//TODO: Metodo para validar el campo del eje a buscar

module.exports = { validatorCreateCargo}//TODO: Exportamos los metodos