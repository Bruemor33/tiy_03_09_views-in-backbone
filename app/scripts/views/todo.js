var $ = require('jquery');
var Backbone = require('backbone');
var handlebars = require('handlebars');

//You sould treat a view like a chunk of HTML unlike a model, where you treat it like Data.
//In Backbone the View will automatically convert your raw html into jQuery.

var todoSource = $('#todos').html();
var todoTemplate = handlebars.compile(todoSource);

var Todo = Backbone.View.extend({
  //since this is a chunk of html we need to tell it what the tag is.
  //If you do not provide the tagName it will default to <div>.
  //When we fetch this out we will get an li since we have provided a tagName.
  tagName: 'ul',

  //Now we provide a className to go with our li tagName.
  className: 'todo-items',
  template: todoTemplate,
  //these are properties we have set into the views default?
  // model:
  // collection:

  initialize: function(){
    //this is where you would set your event listeners.
    //The bellow code is listening for the add() method in our index.
    //The add() is basically doing a fetch call.
    this.listenTo(this.collection, "add", this.render);
  },
  complete: function(){

  },
  render: function(){//this is a noop just like initialize
    //We are calling a render on a view because we are treating the view like HTML.
    //We want this to spit out the HTML
    this.$el.html(this.template(this.collection));
    return this;
  }
})


var todo = new Todo();
//When we fire up our new Todo we want it to 'render' out chunk of html
//why we are calling the render method.
todo.render();

module.exports = Todo;
