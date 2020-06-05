const express = require('express');

const arduino = require('./arduino/arduino.routes');

const router = express.Router();

router.use('/arduino', arduino);

module.exports = router;
