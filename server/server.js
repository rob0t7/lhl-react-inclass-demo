var PORT = process.env.PORT || 4000;

var express    = require('express');
var morgan     = require('morgan');
var bodyParser = require('body-parser');
var cors       = require('cors');

var app = express();

var data = require('./data');
var nextID = data.beers.length + 1;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())
app.use(cors())
app.get('/beers', (req, res) => {
  var beers = data.beers;
  res.json({beers})
})

/* app.get('/beers/:id', (req, res) => {
 *   var beer = data.beers.find( (beer) => { return beer.id === req.params.id })
 *   res.json({beer})
 * })
 *
 * app.post('/beers', (req, res) => {
 *   var beer = req.body;
 *   beer.id = nextID++;
 *   data.beers = [...data.beers, beer]
 *   res.status(201).json({beer})
 * })*/

app.get('/', (req, res) => {
  res.send('OK')
})
app.listen(PORT,  () => {
  console.log('Started Server App')
})
