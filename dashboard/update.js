
var increase = document.getElementById('add-todo-btn');
var para = document.querySelectorAll('p');
let para_count = para.length; // Initialize with the number of <p> elements

function updateCounter() {
    para_count++; // Increment the counter
    console.log("Number of <p> elements:", para_count); // Log the updated count
    
    // Access todo-list container
    var todo = document.getElementById('todo-list');

    // Check if para_count is greater than 5 and apply styles accordingly
    if (para_count > 5) {
        todo.style.maxHeight = '70vh'; // Set max-height to 70vh
        todo.style.overflowY = 'scroll'; // Enable vertical scrollbar
    } else {
        todo.style.maxHeight = 'none'; // Remove max-height limit
        todo.style.overflowY = 'hidden'; // Disable vertical scrollbar
    }
}

increase.addEventListener('click', updateCounter);


