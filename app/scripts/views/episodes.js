var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Collection = require('../collections/episodes'),
    episode = require('../views/episode'),
    model = require('../models/episode'),
    template = require('../../templates/episodes.hbs');

module.exports = Backbone.View.extend({
  initialize: function( options ) {
    var _this = this;

    this.collection = new Collection();

    this.collection.fetch().done(function() {
      _this.render();
    });
  },

  render: function(){
    this.$el.html( template( this.serialize() ) );
  },

  serialize: function() {
    return { episodes: this.collection.toJSON() };
  }
});
