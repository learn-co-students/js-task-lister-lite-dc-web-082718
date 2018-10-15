document.addEventListener("DOMContentLoaded", () => {
  init();
});

const tasksUl = document.querySelector('#tasks');
// const newTaskForm = document.querySelector('#create-task-form');
const submitButton = document.querySelector('#create-task-form > input[type="submit"]:nth-child(3)');
const input = document.querySelector('#new-task-description');
const prioritySelect = document.querySelector('#priority-select')

const init = function() {
  createTaskListener();
}

const createTaskListener = function() {
  submitButton.addEventListener('click', addNewTask)
}

const addNewTask = (() => {
  let taskId = 0;
  return (e) => {
    e.preventDefault();
    let newTask = document.createElement('li');
    newTask.dataset.taskId = ++taskId;
    let taskDescription = document.createElement('p');
    taskDescription.innerText = input.value;
    newTask.appendChild(taskDescription);
    createDeleteButton(newTask, taskId);
    setTaskColor(newTask);
    tasksUl.appendChild(newTask);
  }
})()

const setTaskColor = (task) => {
  switch(prioritySelect.value) {
    case "High":
      task.style.color = "Red";
      break;
    case "Medium":
      task.style.color = "Yellow";
      break;
    case "Low":
      task.style.color = "Green";
      break;
  }
}

const createDeleteButton = function(div, taskId) {
  let newButton = document.createElement('button')
  newButton.innerText = "Delete Task";
  newButton.addEventListener('click', function(e) {
    div.remove();
  })
  div.appendChild(newButton);
}
