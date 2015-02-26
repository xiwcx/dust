'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Player = require('./views/player');
var Router = require('./router');

/*eslint-disable*/
var player = new Player({el: '#JS_player'});
var router = new Router();
/*eslint-enable*/

Backbone.$ = $;

// prevent default link behavior
$(document).on('click', 'a[href^="/"]', function(e) {
  e.preventDefault();
  var href = $(e.currentTarget).attr('href');
  Backbone.history.navigate(href, { trigger: true });
});

Backbone.history.start({pushState: true});
