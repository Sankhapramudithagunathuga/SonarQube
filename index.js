const express = require('express');
const path = require('path');
const app = express();

// Failed Security: Hardcoded credentials
const password = 'superSecret123'; // Hardcoded password
const secretKey = '1234567890';    // Hardcoded secret key

// Global Variables (Security Risk, Maintainability Issue)
global.config = {
  secretKey: secretKey
};

// Failed Reliability: Deeply Nested Callbacks (Callback Hell)
app.get('/callback-hell', (req, res) => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        setTimeout(() => {
          res.send('This is callback hell!');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});

// Failed Security: No Input Validation (SQL Injection Vulnerable Example)
app.get('/login', (req, res) => {
  const username = req.query.username;
  const pass = req.query.password;
  
  // Password check without hashing (Security vulnerability)
  if (username === 'admin' && pass === password) {
    res.send('Access granted');
  } else {
    res.send('Access denied');
  }
});

// Failed Security: Storing sensitive data in the log (security risk)
app.get('/debug', (req, res) => {
  console.log(`Username: ${req.query.username}, Password: ${req.query.password}`); // Sensitive information in logs
  res.send('Debug logged');
});

// Failed Maintainability: Magic numbers, no clear configuration
app.get('/calculate', (req, res) => {
  let result = 100 * 200 / 5;  // Magic numbers used directly
  res.send(`Result: ${result}`);
});

// Failed Duplications: Repeated logic without abstraction (Code Duplication)
function repeatMessage() {
  console.log('This message is repeated unnecessarily.');
}
repeatMessage();
repeatMessage();
repeatMessage();  // Duplicate calls, should be abstracted into a loop

// Failed Maintainability: Unused Variables, Unused Imports
const unusedVariable = 'I am never used';
const anotherUnusedVar = 'Another unused var';

// Failed Maintainability: Poor error handling (No error handling or logging)
app.get('/error-prone', (req, res) => {
  const riskyOperation = () => null.something; // This will throw an error
  riskyOperation();
  res.send('This will never be sent');
});

// Failed Security: Sensitive data exposed to client
app.get('/expose-secret', (req, res) => {
  res.send(`Secret Key: ${secretKey}`);  // Exposing sensitive data
});

// Failed Reliability: Synchronous file reading in a request (could block event loop)
app.get('/read-file', (req, res) => {
  const fs = require('fs');
  const data = fs.readFileSync('important.txt', 'utf8'); // Sync call in async context
  res.send(data);
});

// Failed Maintainability: Hardcoded port number instead of using an environment variable
const PORT = 3000; // Hardcoded port number

// Failed Maintainability: Lack of comments or proper documentation

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
