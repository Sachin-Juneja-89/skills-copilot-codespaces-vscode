// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan'); // morgan is a logger

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Create a route for our app
app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  });
});

app.listen(process.env.PORT || 8081);

