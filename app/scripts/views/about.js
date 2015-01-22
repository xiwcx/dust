var Backbone = require('backbone');
    $ = require('jquery');

Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function(){
    console.log('Yr on the about page')
    this.render();
  },

  render: function(){
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
