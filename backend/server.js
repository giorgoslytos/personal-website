const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendMail = require('./mail');
const path = require('path');


const PORT = process.env.PORT || 3000;
const app = express();

// app.use(express.static(__dirname + '../../dist/giorgoslytos'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello from server')
});

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

app.post('/email', (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log('Data: ', req.body);
  sendMail(name, email, subject, message, function (err, data) {
    if (err) {
      console.log('error from service');
      return res.status(500).json({ message: 'Internal Error' });
    } else {
      console.log('success from service');
      return res.json({ message: 'email sent!' });
    }
  });
});

//start server
app.listen(PORT, () => console.log('Server is starting on PORT, ', PORT));
