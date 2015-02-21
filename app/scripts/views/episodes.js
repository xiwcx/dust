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
    this.$el.html( '<h2>All Episodes</h2><ul id="JS_episodes"></ul>' );
    this.collection.each( this.renderItem );
  },

  renderItem: function( model ) {
    view = new EpisodePreview( { model: model, el: '#JS_episodes' } );
    view.render();
  }
});
