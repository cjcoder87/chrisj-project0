const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
// const fs = require('fs');

const app = express(); //
var bodyParser = require('body-parser');

// app.use(express.static('public'));

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

nunjucks.configure('public', {

autoescape:true,
express:app

});

app.use(bodyParser.json());
app.use(urlencoded({
extended:false
}));

app.set('view engine', 'nunjucks');

app.route('/contact')
.get((req, res) =>{
res.render('contact');
})
.post((req, res) =>{
  console.log(req.body);
  res.end();
});

app.get('/:banana', (req,res)=>{
res.render('boilerplate',{minion:req.params.banana});
});
app.listen(5050);