var express = require('express');
var router = express.Router();

// Function to generate a random number between 0 and 100
function generateRandomNumber() {
  return Math.random() * 100;
}

router.get('/', function(req, res, next) {
  var round1 = generateRandomNumber();
  var round2 = generateRandomNumber();

  var n1 = Math.cos(round1);
  var n2 = Math.asin(round1);
  var n3 = Math.asinh(round2);

  res.send(`
    The Random Numbers are ${round1} and ${round2}<br><br>
    Math.cos() applied to ${round1} is ${n1}<br><br>
    Math.asin() applied to ${round1} is ${n2}<br><br>
    Math.asinh() applied to ${round2} is ${n3}
  `);
});

module.exports = router;
