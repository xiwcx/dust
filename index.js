/* eslint-env node */

'use strict';

var express = require('express');
var app = express();

// Server Configuration

app.set('views', './views');
app.set('view engine', 'jade');

// API Paths

var episodes = require( './routes/api/episodes' );

app
  .use( '/api/episodes', episodes );


// Route Path

app
  .get('/', function (req, res) {
    res.render('index', { title: 'main'});
  })
  .get('/about', function (req, res) {
    res.render('index', { title: 'about'});
  })
  .get('/episodes', function (req, res) {
    res.render('index', { title: 'episodes'});
  })
  .get('/episode/*', function (req, res) {
    res.render('index', { title: 'episode'});
  })
  .get('*', function(req, res, next) {
    next();
  })
  .use(express.static('public'));

// 404

app.use(function(req, res){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});

// Server Definition

var server = app.listen(3003, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
