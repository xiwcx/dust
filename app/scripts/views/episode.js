var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars'),
    Model = require('../models/episode'),
    template = require('../../templates/episode.hbs');

module.exports = Backbone.View.extend({
  events: {
    "click .JS_initTrack": "initTrack"
  },

  initialize: function( options ) {
    var _this = this;

    this.model = new Model({id: options.id});

    this.model.fetch().done(function() {
      _this.render();
    });
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
