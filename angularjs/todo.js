angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;
    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build an AngularJS app', done:false},
      {text:'deploy app', done:false}];
 
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };
 
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.toggleAllDone = function() {
      let allAlreadyDone = true;
      angular.forEach(todoList.todos, function(todo) {
        if (!todo.done) allAlreadyDone = false;
      });

      if(allAlreadyDone) {
        angular.forEach(todoList.todos, function(todo) {
          todo.done = false;
        });
      }
      else {
        angular.forEach(todoList.todos, function(todo) {
          todo.done = true;
        });
      }
    }
 
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });