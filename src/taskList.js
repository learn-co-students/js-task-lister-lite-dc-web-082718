class TaskList {

  // Method
  constructor(){
    this.tasks = []

  }
  postTask(task, count) {

    let list = document.querySelector("#tasks")
    let taskElement = document.createElement("li")
    let button = ` <input type="submit" value="Delete Task" id = "delete-${count}">`
    taskElement.innerHTML = task.text + button;
    list.appendChild(taskElement)
  }
}
