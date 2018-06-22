const express = require('express');
// const nunjucks = require('nunjucks');
const path = require('path');
// const fs = require('fs');

const app = express(); //

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/../index.html'));
});

app.listen(9000, () => {
  console.log('hello express');
});