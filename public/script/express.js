const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
// const fs = require('fs');

const app = express(); //
// var bodyParser = require('body-parser');

app.use(express.static('public'));
// app.use(express.static('views'));


// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../index.html'));
// });

// app.listen(9000, () => {
//   console.log('hello express');
// });

// app.get(/[a-z]/,(req, res)  =>{
//   res.sendFile(path.join(__dirname, '/../', req.url, '.html'));

// }); //regular expression, route pattern

// app.get('/contact/:banana', (req,res) => {
// if(req.params && req.params.banana){
//   path.join(__dirname, '/../index.html');
// }
// else{
//   path.join(__dirname, '/../index.html');
  
// }
// });

// app.get(/[0-9]/, () => {});
// app.get(/[a-z0-9]/, () => {});

nunjucks.configure('views', {
autoescape:true,
express:app
});

// app.use(bodyParser.json());
// app.use(urlencoded({
// extended:false
// }));

app.set('view engine', 'njk');

// app.route('/index')
// .get((req, res) =>{
// res.render('index');
// })
// .post((req, res) =>{
//   console.log(req.body);
//   res.end();
// });
app.get( '/', function( req, res ) {
  res.render( 'index.njk');
});

app.get('/style', function (req, res) {
  res.render('css.njk')
});

app.get('/js', function (req, res) {
  res.render('js.njk')
});
// app.get('/', (req,res)=>{
// // res.render('js');
// res.render('index');
// // res.render('css');
// });
app.listen(9000);