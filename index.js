var express = require('express'),
    app = express(),
    router = express.Router(),
    mongoskin = require('mongoskin'),
    db = mongoskin.db('mongodb://localhost:27017/dust', {safe:true});

app.get('/', function (req, res) {
  res.send( db )
})

app.get('/episodes', function(req, res) {
  db.collection( "episodes" ).find( { $query: {}, $orderby: { id : -1 } } )
    .toArray(function(e, episodes) {
    var limit = req.query.limit,
        offset = req.query.offset,
        length = episodes.length;

    if( offset >= 0 ) {
      episodes = episodes.slice( offset, length );
    } else if( limit >= 0 ) {
      episodes = episodes.slice( 0, limit );
    }

    res.send( episodes )
  })
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
