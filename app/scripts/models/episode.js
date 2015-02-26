'use strict';

var Backbone = require('backbone');
var config = require('../config');

module.exports = Backbone.Model.extend({
  urlRoot: config.urlRoot + '/episodes/'
});
