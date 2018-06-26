//includes all files
const express = require('express');
const nunjucks = require('nunjucks');
const app = express(); //

//allows all files(css,images,js) to be loaded into the html, you must place all files being used in a folder called public
app.use(express.static('public'));

//sets folder where nunjucks files are located
nunjucks.configure('views', {
  autoescape: true,
  express: app
});

//sets nunjucks engine
app.set('view engine', 'njk');

//after localhost:9000 use root after in url, will load the nunjucks file specified, make a function for each page
app.get('/', function (req, res) {
  res.render('index.njk');
});

app.get('/style', function (req, res) {
  res.render('css.njk')
});

app.get('/js', function (req, res) {
  res.render('js.njk')
});

//assigns port
app.listen(9000);