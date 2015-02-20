var $ = require('jquery'),
    Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  defaults: {
    "streamingReady": false
  }
});
