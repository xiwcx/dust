var $ = require('jquery'),
    Backbone = require('backbone'),
    Episode = require('./views/episode');
    Episodes = require('./views/episodes');

Backbone.$ = $;

module.exports = Backbone.Router.extend({

  routes: {
    "": "episodes",
    "about": "about",
    "episode/:id": "episode"
  },

  home: function () {
    console.log('home');
    $('main').html('<p>This is the home page.</p>');
  },

  about: function () {
    console.log('about');
    $('main').html('<p>This is the about page.</p>');
  },

  episode: function( id ) {
    episode = new Episode( {id: id} );
  },

  episodes: function() {
    console.log( "test" );
    episodes = new Episodes();
  }
});
