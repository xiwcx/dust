'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Collection = require('../collections/episodes');
var episode = require('../views/episode');
var EpisodePreview = require('../views/episode-preview');

module.exports = Backbone.View.extend({
  initialize: function() {
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
    var view = new EpisodePreview( { model: model } );
    $('#JS_episodes').append( view.el );
  }
});
