
const addButton = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new todo item
function addTodo() {
  // Create a new paragraph element
  const newTodo = document.createElement('p');
  newTodo.contentEditable = 'true';
  // Create a checkbox element
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  // Add event listener to the checkbox
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      newTodo.style.textDecoration = 'line-through'; // Add strikethrough style when checkbox is checked
    } else {
      newTodo.style.textDecoration = 'none'; // Remove strikethrough style when checkbox is unchecked
    }
  });

  // Append the checkbox to the new todo item
  newTodo.appendChild(checkbox);

  // Add text content to the new todo item
  newTodo.appendChild(document.createTextNode('to do --'));

  // Append the new todo item to the todo list container
  todoList.appendChild(newTodo);
}

// Add event listener to the button
addButton.addEventListener('click', addTodo);

