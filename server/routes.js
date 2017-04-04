const express = require('express');
const Router  = express.Router;

module.exports = (DBUtil) => {
  var router = Router();

  router.get('/', (req, res) => {
    DBUtil.fetchBeers( (err, beers) => {
      if (err) throw err;
      res.json({beers: beers});
    })
  })

  router.post('/', (req, res) => {
    let beer = req.body.beer
    DBUtil.insertBeer(beer, (err, result) => {
      if (err) throw err;
      res.status(201).json(result.ops[0]);
    })
  })

  router.get('/:id', (req, res) => {
    DBUtil.fetchBeer(req.params.id, (err, beer) => {
      if (err) {
        res.status(404)
      } else {
        res.json(beer)
      }
    })
  })
  return router;
}
