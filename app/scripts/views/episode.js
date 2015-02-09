var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    model = require('../models/episode.js');

module.exports = Backbone.View.extend({
  initialize: function( options ) {
    var _this = this;

    this.model = new model({id: options.id});

    this.model.fetch().done(function() {
      _this.render();
    });
  },

  render: function(){
    this.$el.html( this.template( this.serialize() ) );
  },

  serialize: function(){
    return this.model.attributes;
  },

  template: _.template( "<h2>Episode <%= num %></h2><ul><li>title: <%= title %></li><li>description: <%= description %></li></ul>" ),

  el: "main"
});
