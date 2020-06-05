const express = require('express');
const { toggleLed } = require('./arduino');

const router = express.Router();

router.get('/', (req, res) => {
  const isOn = toggleLed();
  res.json({ isOn });
});

module.exports = router;
