'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var Model = require('../models/player');
var template = require('../../templates/player.hbs');

module.exports = Backbone.View.extend({
  el: '#JS_playercontrols',

  events: {
    'click #JS_toggle-pause': 'togglePause'
  },

  initialize: function() {
    this.model = new Model();
    this.render();
    this.listenTo(Backbone, 'initTrack', this.initTrack);
  },

  render: function(){
    this.$el.html( template() );
  },

  initTrack: function( trackID ) {
    var player = $('#JS_player');
    if ( this.model.get( 'scID' ) === trackID ) {
      return false;
    }

    this.model.set({
      paused: false,
      scID: trackID
    });

    player.attr('src', 'https://api.soundcloud.com/tracks/' + trackID + '/stream?client_id=b4bc7152f06228bec93e43a069141c68');
    player[0].play();
  },

  togglePause: function() {
    var player = $('#JS_player');
    if( this.model.get( 'paused' ) ) {
      this.model.set( {paused: false} );
      return player[0].play();
    }

    this.model.set( {paused: true} );
    player[0].pause();
  }
});
