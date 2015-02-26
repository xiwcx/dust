'use strict';

var Backbone = require('backbone');
var config = require('../config');
var model = require('../models/episode.js');

module.exports = Backbone.Collection.extend({
  url: config.urlRoot + '/episodes/',
  model: model
});
