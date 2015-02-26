'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var Model = require('../models/player');
var template = require('../../templates/player.hbs');

module.exports = Backbone.View.extend({
  events: {
    'click #JS_toggle-pause': 'togglePause'
  },

  initialize: function() {
    var _this = this;
    this.model = new Model();
    /*eslint-disable*/ // skip over client_id
    SC.initialize({client_id: 'b4bc7152f06228bec93e43a069141c68'});
    /*eslint-enable*/
    SC.whenStreamingReady( function() {
      _this.model.set( { streamingReady: true } );
    });
    this.render();
    this.listenTo(Backbone, 'initTrack', this.initTrack);
  },

  render: function(){
    this.$el.html( template() );
  },

  updateTime: function() {
    $( '#JS_player-progress').attr( 'value', (
      soundManager.sounds[ this.model.get( 'smID' ) ].position /
      soundManager.sounds[ this.model.get( 'smID' ) ].durationEstimate)
      * 100 );
  },

  initTrack: function( trackID ) {
    var _this = this;

    if ( this.model.get( 'scID' ) === trackID ) {
      return false;
    }
    if ( this.model.get( 'smID' ) ) {
      soundManager.destroySound( this.model.get( 'smID' ) );
    }

    var smObject = new Promise( function( resolve ) {
      resolve( SC.stream( '/tracks/' + trackID ) );
    });

    smObject.then( function( object ){
      _this.model.set({
        paused: false,
        scID: trackID,
        smID: object.sID
      });
    }).then( function() {
      soundManager.play( _this.model.get( 'smID' ), {
        whileplaying: _this.updateTime.bind( _this )
      });
    });

  },

  togglePause: function() {
    if( this.model.attributes.paused ) {
      this.model.set( {paused: false} );
      soundManager.play( this.model.get( 'smID' ) );
    } else {
      this.model.set( {paused: true} );
      soundManager.pause( this.model.get( 'smID' ) );
    }
  }
});
