          // **** V1 - Arrays Requirements **** //

// It should have a place to store todos

var todos = ['item 1', 'item 2', 'item 3'];

// It should have a way to display todos

console.log('My todos', todos);

// It should hava a way to way to change a todo

todos.push('item4');
todos.push('item5');

// It should hava a way to change an existing todo

todos[0] = 'item 1 updated';

// It should hav a way to delete a todo

todos.splice(0, 1);              
              
          // **** V2 - Functions Requirements **** //

// It should have a function to display todos

function displayTodos() {
  console.log('My todos:' , todos);
}

// It should hava a function to add todos

function addTodos(todo) {
  todos.push(todo);
  displayTodos();
}

// It should have a function to change todos

function changeTodos(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

// It should have a function to delete todos

function deleteTodos(position) {
  todos.splice(position, 1);
  displayTodos();
}