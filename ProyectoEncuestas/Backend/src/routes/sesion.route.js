const express = require("express");
const router = express.Router();
const { ctrCrearA } = require('../controllers/sesion.controller');

router.post('/crear',ctrCrearA);

module.exports = router;