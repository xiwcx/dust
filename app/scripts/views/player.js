var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars'),
    Model = require('../models/player'),
    template = require('../../templates/player.hbs');

module.exports = Backbone.View.extend({
  events: {
    "click .JS_killall": "killAll"
  },

  initialize: function( options ) {
    var _this = this;
    this.model = new Model();
    SC.initialize({client_id: 'b4bc7152f06228bec93e43a069141c68'});
    SC.whenStreamingReady( function() {
      _this.model.set( { streamingReady: true } );
    });
    this.render();
    this.listenTo(Backbone, "initTrack", this.initTrack);
  },

  render: function(){
    this.$el.html( template() );
  },

  initTrack: function( trackID ) {
    SC.stream("/tracks/" + trackID, function(sound){
      sound.play();
    });
    console.log( "now playing: " + trackID );
  },

  killAll: function() {
    SC.streamStopAll();
  }
});
