document.getElementById("taskForm").onsubmit = function (event) {
  event.preventDefault();
  const taskText = document.getElementById("newTask").value.trim();
  if (taskText) {
    addTask(taskText);
    document.getElementById("newTask").value = "";
  }
};

function addTask(taskText) {
  const taskItem = document.createElement("div");
  taskItem.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.onchange = function () {
    taskTextElement.classList.toggle("completed", this.checked);
  };

  const taskTextElement = document.createElement("span");
  taskTextElement.className = "task-text";
  taskTextElement.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    taskItem.remove();
  };

  taskItem.append(checkbox, taskTextElement, deleteButton);
  document.getElementById("tasks").append(taskItem);
}
