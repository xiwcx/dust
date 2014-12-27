var express = require('express'),
    app = express(),
    router = express.Router(),
    mongoskin = require('mongoskin'),
    db = mongoskin.db('mongodb://localhost:27017/dust', {safe:true});

app.get('/', function (req, res) {
  res.send( db )
})

app.get('/episodes', function(req, res) {
  db.collection( "episodes" )
    .find( {}, { _id:0 } )
    .sort( { id : -1 } )
    .limit( parseInt( req.query.limit ? req.query.limit : 0 ) )
    .skip( parseInt( req.query.skip ? req.query.skip : 0 ) )
    .toArray(function(e, episodes) {
      res.send( episodes )
    })
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
