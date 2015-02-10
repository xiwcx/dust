var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars'),
    model = require('../models/episode.js'),
    template = require('../../templates/episode.hbs');

module.exports = Backbone.View.extend({
  initialize: function( options ) {
    var _this = this;

    this.model = new model({id: options.id});

    this.model.fetch().done(function() {
      _this.render();
    });
  },

  render: function(){
    this.$el.html( template( this.serialize() ) );
  },

  serialize: function(){
    return this.model.attributes;
  },

  el: "main"
});
