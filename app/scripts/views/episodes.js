var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Collection = require('../collections/episodes'),
    episode = require('../views/episode'),
    EpisodePreview = require('../views/episode-preview');

module.exports = Backbone.View.extend({
  initialize: function( options ) {
    var _this = this;

    this.collection = new Collection();

    this.collection.fetch().done(function() {
      _this.render();
    });
  },

  render: function(){
    var models = this.collection.models;

    this.$el.html( '<h2>All Episodes</h2><ul id="JS_episodes"></ul>' );

    for ( var i = 0; i < models.length; i++  ) {
      view = new EpisodePreview( { model: models[i], el: '#JS_episodes' } );
      view.render();
    }
  }
});
