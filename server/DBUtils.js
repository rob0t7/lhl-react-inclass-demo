const ObjectId = require('mongodb').ObjectId

module.exports = (db) => {
  return {
    fetchBeers: (cb) => {
      db.collection('beers').find({}).sort({name: 1}).toArray(cb);
    },
    insertBeer: (beer, cb) => {
      db.collection('beers').insertOne(beer, cb);
    },
    fetchBeer: (id, cb) => {
      db.collection('beers').findOne({_id: ObjectId(id)}, cb);
    }
  }
}
