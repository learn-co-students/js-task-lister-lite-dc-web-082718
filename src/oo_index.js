
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList()
  createTask(taskList)
});


function createTask(taskList){
  document.querySelector("#create-task-form").addEventListener('submit', function(event){
    event.preventDefault()
    //create a new Task instance when submitting
    let task = new Task(document.querySelector("#new-task-description").value)

    //add this new instance's description to the taskList instance of Tasklist Class
    taskList.addTask(task["description"])

    let liElement = document.createElement('li')
    liElement.innerText = task["description"]
    document.querySelector("#tasks").appendChild(liElement)
    document.querySelector("#create-task-form").reset()

  })
}
