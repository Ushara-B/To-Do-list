var todoInput = document.getElementById("todo-input");
var addBtn = document.getElementById("add-btn");
var todoList = document.getElementById("todo-list");

function createTask(taskText) {
  var li = document.createElement("li");
  li.className = "todo-item";

  var taskSpan = document.createElement("span");
  taskSpan.innerText = taskText;

  var buttonsContainer = document.createElement("div");
  buttonsContainer.className = "buttons-container";

  var completeBtn = document.createElement("button");
  completeBtn.innerText = "Complete";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = function() {
    li.classList.toggle("completed");
    if (li.classList.contains("completed")) {
      taskSpan.style.opacity = "0.5";
    } else {
      taskSpan.style.opacity = "1";
    }
  };

  var deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = function() {
    li.remove();
  };

  buttonsContainer.appendChild(completeBtn);
  buttonsContainer.appendChild(deleteBtn);

  li.appendChild(taskSpan);
  li.appendChild(buttonsContainer);

  todoList.appendChild(li);
}

function addTask(event) {
  event.preventDefault();
  var taskText = todoInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  createTask(taskText);

  todoInput.value = "";
}

addBtn.addEventListener("click", addTask);