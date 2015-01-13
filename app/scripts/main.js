var Backbone = require('backbone');
    $ = require('jquery');

Backbone.$ = $;

// prevent default link behavior
$(document).on('click', 'a[href^="/"]', function(e) {
  e.preventDefault();
  var href = $(e.currentTarget).attr('href');
  Backbone.history.navigate(href, { trigger: true });
});

var Router = require('./router');
var router = new Router();

Backbone.history.start({pushState: true});
