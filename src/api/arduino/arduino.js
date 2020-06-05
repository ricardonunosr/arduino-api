const five = require('johnny-five');

const board = new five.Board({
  port: 'COM3',
});

let led;
let isOn = false;

board.on('ready', () => {
  // Define the pin 13 to be used
  led = new five.Led(13);
  // Turn off the Led
  led.off();
});

function toggleLed() {
  // If the Led is on
  if (isOn) {
    // Turn off the Led
    led.off();
    isOn = false;
  } else {
    // Turn on the Led
    led.on();
    isOn = true;
  }
  return isOn;
}

module.exports = { toggleLed };
