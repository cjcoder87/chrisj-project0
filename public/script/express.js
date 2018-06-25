//includes all files
const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');


const app = express(); //

//allows all files to be loaded into the html
app.use(express.static('public'));

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.set('view engine', 'njk');

app.get('/', function (req, res) {
  res.render('index.njk');
});

app.get('/style', function (req, res) {
  res.render('css.njk')
});

app.get('/js', function (req, res) {
  res.render('js.njk')
});

app.listen(9000);