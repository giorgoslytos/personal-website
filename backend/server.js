const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sendMail = require('./mail');
const path = require('path');
const http = require('http');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'giorgoslytos')));

app.use(bodyParser.json());
app.use(cors());


app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

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
const server = http.createServer(app);

server.listen(port, () => console.log('Server is starting on PORT, ', port));
