const express = require("express");
const router = express.Router();
const { ctrCrearA,ctrComprobarUsuarios } = require('../controllers/sesion.controller');

router.post('/crear',ctrCrearA);
router.get('/',ctrComprobarUsuarios);
module.exports = router;