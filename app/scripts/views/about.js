var Backbone = require('backbone');
    $ = require('jquery');

Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function(){
    console.log('wuuut')
    this.render();
  },

  render: function(){
    $('main').prepend('<p>test</p>');
  }
});
