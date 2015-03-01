'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Handlebars = require('handlebars');
var Model = require('../models/player');
var template = require('../../templates/player.hbs');
var player = document.getElementById('JS_toggle-pause');

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
    if ( this.model.get( 'scID' ) === trackID ) {
      return false;
    }

    this.model.set({
      paused: false,
      scID: trackID
    });

    $('#JS_player').attr('src', 'https://api.soundcloud.com/tracks/' + trackID + '/stream?client_id=b4bc7152f06228bec93e43a069141c68');
    $('#JS_player')[0].play();
  },

  togglePause: function() {
    if( this.model.get( 'paused' ) ) {
      this.model.set( {paused: false} );
      return $('#JS_player')[0].play();
    }

    this.model.set( {paused: true} );
    $('#JS_player')[0].pause();
  }
});
