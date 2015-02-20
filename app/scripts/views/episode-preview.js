var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars'),
    template = require('../../templates/episode-preview.hbs');

module.exports = Backbone.View.extend({
  initialize: function( options ) {
    var _this = this;

    this.model = options.model;
  },

  render: function(){
    this.$el.append( template( this.serialize() ) );
  },

  serialize: function(){
    return this.model.attributes;
  }
});
