var express = require('express'),
    app = express(),
    subdomain = require('express-subdomain');

// Route Path

app.get('/', function (req, res) {
  res.send( "hello, world" )
})

// API Paths

var episodes = require( './routes/api/episodes' );

app.use( '/episodes', subdomain('api', episodes) );

// Server Definition

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
