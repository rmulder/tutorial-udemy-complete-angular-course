
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

// ....

// For all routes, send index.html
app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/index.html');
});

// Listening to environment port or 8080
app.listen(process.env.PORT || 8080);