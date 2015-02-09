var $ = require('jquery'),
    _ = require('underscore'),
    Backbone = require('backbone'),
    model = require('../models/episode.js'),
    config = require('../config');

module.exports = Backbone.Collection.extend({
  url: config.urlRoot + '/episodes/',
  model: model
});
