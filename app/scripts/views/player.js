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
    if ( this.model.attributes.scID !== trackID ) {
      var smObject = SC.stream("/tracks/" + trackID, function(sound){
        sound.play();
      });
      this.model.set( {scID: trackID, smID: smObject.sID} );

      // console.log( "scID is: " + this.model.attributes.scID );
      // console.log( "smID is: " + this.model.attributes.smID );
    }

  },

  killAll: function() {
    SC.streamStopAll();
  }
});
