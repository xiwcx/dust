var $ = require('jquery'),
    Backbone = require('backbone'),
    config = require('./config'),
    Episode = require('./views/episode'),
    Episodes = require('./views/episodes');

Backbone.$ = $;

module.exports = Backbone.Router.extend({

  routes: {
    "": "episodes",
    "episode/:id": "episode"
  },

  episode: function( id ) {
    var episode = new Episode( {
      id: id,
      el: "#JS_main"
    });

    document.title = config.siteTitle + "Episode " + id;
  },

  episodes: function() {
    var episodes = new Episodes({
      el: "#JS_main"
    });

    document.title = config.siteTitle + "Home";
  }
});
