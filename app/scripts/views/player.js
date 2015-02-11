var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars'),
    model = require('../models/episode.js'),
    template = require('../../templates/player.hbs');

module.exports = Backbone.View.extend({
  initialize: function( options ) {
    this.render();
  },

  render: function(){
    this.$el.html( template() );
  }
});
