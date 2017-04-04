const PORT = process.env.PORT || 5000;

const MongoClient = require('mongodb').MongoClient;
const MONGO_URL   = process.env.MONGO_URL || 'mongodb://localhost/lhl-beers';

const express     = require('express');
const morgan      = require('morgan');
const bodyParser  = require('body-parser');
const cors        = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('OK')
})

MongoClient.connect(MONGO_URL, (err, db) => {
  if (err) {
    throw err;
  }

  const DBUtils = require('./DBUtils')(db)
  app.use('/beers', require('./routes')(DBUtils))

  app.listen(PORT,  () => {
    console.log(`Start App Server on port: ${PORT}`)
  })
})
