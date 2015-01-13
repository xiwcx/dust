var $ = require('jquery'),
    Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone.Router.extend({

  routes: {
    "": "home",
    "about": "about"
  },

  home: function () {
    console.log('home');
    $('main').replaceWith('<p>This is the home page.</p>');
  },

  about: function () {
    // new aboutView({el: $('main')});
    console.log('about');
    $('main').replaceWith('<p>This is the about page.</p>');
  }
});
