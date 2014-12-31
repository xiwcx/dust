var express = require('express'),
    app = express(),
    subdomain = require('express-subdomain');

// Server Configuration

app.set('views', './views')
app.set('view engine', 'jade')

// Route Path

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
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
