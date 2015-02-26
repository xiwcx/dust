'use strict';

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    'streamingReady': false,
    'paused': true
  }
});
