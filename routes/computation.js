var express = require('express');
var router = express.Router();
const app = express();
const port = 3000; 


app.get('/computation', (req, res) => {
  const queryX = parseFloat(req.query.x); 
  const lastDigit = req.user.id % 10;
  const randomValue = queryX || Math.random(); 
  const result = Math.cosh(randomValue);

  res.status(200).json({
    result: `Math.cosh() applied to ${queryX ? queryX : 'random value'} is ${result.toFixed(2)}`,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = router;