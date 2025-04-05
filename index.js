// index.js
const express = require('express');
const app = express();
const logger = require('./logger');
const port = 3000;

// Middleware for logging each request
app.use((req, res, next) => {
  logger.info({
    message: 'Request received',
    method: req.method,
    url: req.url,
    ip: req.ip
  });
  next();
});

// Helper function to validate inputs
function validateNumbers(num1, num2, res) {
  if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
    const msg = 'Invalid input: num1 and num2 must be numbers.';
    logger.error(msg);
    res.status(400).json({ error: msg });
    return false;
  }
  return true;
}

// Addition endpoint
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2, res)) return;
  const result = parseFloat(num1) + parseFloat(num2);
  logger.info(`Addition: ${num1} + ${num2} = ${result}`);
  res.json({ result });
});

// Subtraction endpoint
app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2, res)) return;
  const result = parseFloat(num1) - parseFloat(num2);
  logger.info(`Subtraction: ${num1} - ${num2} = ${result}`);
  res.json({ result });
});

// Multiplication endpoint
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2, res)) return;
  const result = parseFloat(num1) * parseFloat(num2);
  logger.info(`Multiplication: ${num1} * ${num2} = ${result}`);
  res.json({ result });
});

// Division endpoint
app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  if (!validateNumbers(num1, num2, res)) return;
  if (parseFloat(num2) === 0) {
    const msg = 'Error: Cannot divide by zero.';
    logger.error(msg);
    return res.status(400).json({ error: msg });
  }
  const result = parseFloat(num1) / parseFloat(num2);
  logger.info(`Division: ${num1} / ${num2} = ${result}`);
  res.json({ result });
});

// Start server
app.listen(port, () => {
  console.log(`Calculator microservice running at http://localhost:${port}`);
});