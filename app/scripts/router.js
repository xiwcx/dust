var $ = require('jquery'),
    AboutView = require('./views/about'),
    aboutView = new AboutView(),
    Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.Router.extend({

  routes: {
    "": "home",
    "about": "about"
  },

  home: function () {
    console.log('home');
  },

  about: function () {
    // new aboutView({el: $('main')});
    console.log('about');
  }
});
