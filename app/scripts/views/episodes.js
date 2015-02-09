var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    model = require('../models/episode'),
    episode = require('../views/episode'),
    Collection = require('../collections/episodes');

module.exports = Backbone.View.extend({
  initialize: function( options ) {
    var _this = this;

    this.collection = new Collection();

    this.collection.fetch().done(function() {
      _this.render();
    });
  },

  render: function(){
    this.$el.html( this.template() );
  },

  template: _.template( "<h2>all the episodes</h2><ul></ul>" ),

  el: "main"
});
