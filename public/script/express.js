//includes all files
const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
// const mongoose = require('mongoose');
//abstracts from the express library
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


var person = function Person(f, l) {
  this.first = f;
  this.last = l;
}

var people = [];

app.route('/contact')
  .get((req, res) => {
    res.render('index.njk');
  })
  .post((req, res) => {
    people.push(new person(req.body.fname, req.body.lname));
    for (var p in people) {
      console.log(people[p].first);
    }
    res.end();
  });

//assigns port
app.listen(process.env.PORT || 9000, process.env.IP || '0.0.0.0');