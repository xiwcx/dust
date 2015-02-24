var Backbone = require('backbone'),
    $ = require('jquery'),
    Player = require('./views/player');

Backbone.$ = $;

// prevent default link behavior
$(document).on('click', 'a[href^="/"]', function(e) {
  e.preventDefault();
  var href = $(e.currentTarget).attr('href');
  Backbone.history.navigate(href, { trigger: true });
});

var Router = require('./router'),
    router = new Router(),
    player = new Player({el: "#JS_player"});

Backbone.history.start({pushState: true});
