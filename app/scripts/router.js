var $ = require('jquery'),
    Backbone = require('backbone'),
    Episode = require('./views/episode');
    Episodes = require('./views/episodes');

Backbone.$ = $;

module.exports = Backbone.Router.extend({

  routes: {
    "": "episodes",
    "episode/:id": "episode"
  },

  episode: function( id ) {
    episode = new Episode( {id: id} );
  },

  episodes: function() {
    episodes = new Episodes();
  }
});
