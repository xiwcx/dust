var Backbone = require('backbone');
    $ = require('jquery');

Backbone.$ = $;

var Router = require('./router');
var router = new Router();

Backbone.history.start({pushState: true});
