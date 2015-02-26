'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var template = require('../../templates/episode-preview.hbs');

module.exports = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click .JS_initTrack': 'initTrack'
  },

  initialize: function( options ) {
    this.model = options.model;
    this.render();
  },

  initTrack: function() {
    Backbone.trigger( 'initTrack', this.model.attributes.scTrackID );
  },

  render: function(){
    this.$el.html( template( this.serialize() ) );
  },

  serialize: function(){
    return this.model.attributes;
  }
});
