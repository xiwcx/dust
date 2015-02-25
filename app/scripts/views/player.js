var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    Handlebars = require('handlebars'),
    Model = require('../models/player'),
    template = require('../../templates/player.hbs');

module.exports = Backbone.View.extend({
  events: {
    "click #JS_toggle-pause": "togglePause"
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
    var _this = this;

    if ( this.model.attributes.scID !== trackID ) {
      if ( this.model.attributes.smID ) {
        soundManager.destroySound( this.model.attributes.smID );
        console.log( "killed: " + this.model.attributes.smID );
      }

      var smObject = new Promise( function(resolve) {
        resolve( SC.stream( "/tracks/" + trackID ) );
      });

      smObject.then( function( object ){
        _this.model.set({
          paused: false,
          scID: trackID,
          smID: object.sID
        });
      }).then( function() {
        soundManager.play( _this.model.attributes.smID, {
          whileplaying: function() {
            $( '#JS_player-progress').attr( 'value', (
              soundManager.sounds[ _this.model.attributes.smID ].position /
              soundManager.sounds[ _this.model.attributes.smID ].durationEstimate)
              * 100 );
          }
        });
      });
    }

  },

  togglePause: function() {
    if( this.model.attributes.paused ) {
      this.model.set( {paused: false} );
      soundManager.play( this.model.attributes.smID );
    } else {
      this.model.set( {paused: true} );
      soundManager.pause( this.model.attributes.smID );
    }
  }
});
