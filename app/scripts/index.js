console.log("Hello World!");
var $ = ('jquery');
var Backbone = require('backbone');
var model = require('./model/todo');
var Todo = require('./views/todo');


// var listItem = $('#first-list-item')[0]; //add the [0] to grab the raw html node
//
// var todo = new Todo({el: listItem});//when console.log()'d this shows that you have $el that is an empty DOM node until we populate it.
// //When pulling in the raw html it will automatically wrap our raw html within jQuery so we don't have to write jQuery.
// //You want to pass your selected HTML into the Todo as an object with the el property.

//Setup app
var todos = new model.TodoCollection();
var todoView = new Todo({collection: todos, el: $('#todo-items')[0]}); //instantiate after in order to hook the view up to the collection we are //working with.


todos.on('add', function(){
  console.log('Tasks added to todo collection');
});

//Simulate a fetch
todos.add([
  {'task': 'Learn Backbone Views', 'completed': false},
  {'task': 'Hook up ciew to model with events', 'completed': false}
]);

//View this as the entry way into your application. This starts your application.
