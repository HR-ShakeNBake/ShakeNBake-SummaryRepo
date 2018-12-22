const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database-mysql');

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  console.log('serving get request');
	res.status(200).send('hello world');
});


app.post('/', (req, res) => {
  console.log('serving post request');
  res.status(201).end();
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
