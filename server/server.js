require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.SERVER_PORT || 3003;

app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

app.use(express.static(__dirname + '/../build'));

app.get('/api/test', (req, res) => {
  console.log(req.body.test);
  res.status(200).send('Successful');
});

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
});