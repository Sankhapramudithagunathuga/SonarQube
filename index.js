const express = require('express');
const path = require('path');
const app = express();

// Bad practice: Hardcoded password
const password = 'superSecret123';

// Bad practice: Global variables (avoid polluting the global scope)
global.config = {
  secretKey: '1234567890',  // Bad practice: Hardcoded secret key
};

// Bad practice: Nested callbacks leading to "callback hell"
app.get('/callback-hell', (req, res) => {
  setTimeout(() => {
    setTimeout(() => {
      setTimeout(() => {
        res.send('This is callback hell!');
      }, 1000);
    }, 1000);
  }, 1000);
});

// Bad practice: No input validation and not sanitizing user input
app.get('/login', (req, res) => {
  const user = req.query.username;
  const pass = req.query.password;
  
  // Direct comparison without hashing
  if (user === 'admin' && pass === password) {
    res.send('Welcome, admin!');
  } else {
    res.send('Access denied!');
  }
});

// Code duplication: Same logic repeated unnecessarily
function repeatMessage() {
  console.log('This message is repeated unnecessarily.');
}
repeatMessage();
repeatMessage();
repeatMessage();

// Bad practice: Unused variables
const unusedVariable = 12345;

// Start the server
const PORT = 3000; // Hardcoded port number
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
