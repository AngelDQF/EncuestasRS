const { check } = require('express-validator');//TODO: Importamos el metodo check de express-validators
const { validationResults } = require('../utils/handleValidators');//TODO: Importamos el metodo validationResults de handleValidators

const validatorGetEje = [//TODO: Metodo para validar el campo del eje a buscar
  check('eje').exists().isString().isLength({ max: 250 }).withMessage("Campo no encontrado"),//TODO: Validamos que el campo eje exista, sea un string y tenga una longitud maxima de 250 caracteres
  (req, res, next) => {//TODO: Funcion para validar los resultados
    return validationResults(req, res, next);//TODO: Retornamos los resultados de la validacion
  }
]
//TODO: Metodo para validar los campos al momento de crear un item
const validatorCreateEje = [//TODO: Metodo para validar los campos al momento de crear un item
  check('eje').exists().isString().isLength({ min: 1, max: 250 }).withMessage("No puedes crear un eje sin nombre"),//TODO: Validamos que el campo eje exista, sea un string y tenga una longitud maxima de 250 caracteres
  check('estado').exists().notEmpty().isBoolean(),//TODO: Validamos que el campo estado exista, no este vacio y sea un booleano
  (req, res, next) => {//TODO: Funcion para validar los resultados
    return validationResults(req, res, next);//TODO: Retornamos los resultados de la validacion
  }
];
const validatorUpdateEje = [//TODO: Metodo para validar los campos al momento de actualizar un item
  check('id').exists().isInt().isLength({ min: 1 }).withMessage("No has ingresado una ID"),//TODO: Validamos que el campo id exista, sea un entero y tenga una longitud minima de 1
  check('eje').exists().isString().isLength({ min: 1, max: 250 }).withMessage("No puedes crear un eje sin nombre"),//TODO: Validamos que el campo eje exista, sea un string y tenga una longitud maxima de 250 caracteres
  (req, res, next) => {//TODO: Funcion para validar los resultados
    return validationResults(req, res, next);//TODO: Retornamos los resultados de la validacion
  }
];
const validatorUpdateEjeEstado = [//TODO: Metodo para validar los campos al momento de actualizar el estado de un item
  check('id').exists().isInt().isLength({ min: 1 }).withMessage("No has ingresado una ID"),//TODO: Validamos que el campo id exista, sea un entero y tenga una longitud minima de 1
  check('estado').exists().notEmpty().isBoolean(),//TODO: Validamos que el campo estado exista, no este vacio y sea un booleano
  (req, res, next) => {//TODO: Funcion para validar los resultados
    return validationResults(req, res, next);//TODO: Retornamos los resultados de la validacion
  }
];
//TODO: Metodo para validar el campo del eje a buscar

module.exports = { validatorCreateEje, validatorGetEje, validatorUpdateEje, validatorUpdateEjeEstado }//TODO: Exportamos los metodos