// JavaScript (script.js)

// Function to add a new board
function addBoard() {
  const boardName = document.getElementById('boardName').value;
  if (boardName.trim() === '') {
    return; // Prevent adding an empty board
  }

  const boardDiv = document.createElement('div');
  boardDiv.className = 'board';
  boardDiv.innerHTML = `
    <h2>${boardName}</h2>
    <ul class="todo-list"></ul>
    <input type="text" placeholder="New Task">
    <button onclick="addTodo(this)">Add Task</button>
  `;

  document.querySelector('.board-list').appendChild(boardDiv);
  document.getElementById('boardName').value = '';
}

// Function to add a new todo
function addTodo() {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value;
  if (taskName.trim() === '') {
    return; // Prevent adding an empty task
  }

  const todoList = taskInput.parentElement.querySelector('.todo-list');
  const todoItem = document.createElement('li');
  todoItem.innerHTML = `
    <input type="checkbox">
    <span>${taskName}</span>
    <button onclick="deleteTodo(this)">Delete</button>
  `;

  todoList.appendChild(todoItem);
  taskInput.value = '';
}
// Function to delete a todo
function deleteTodo(button) {
  const todoItem = button.parentElement;
  todoItem.remove();
}