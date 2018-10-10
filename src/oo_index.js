
document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#tasks")
  const taskList = new TaskList(list);
  let taskCount = 1;


  submit.addEventListener("click", function(e){
    let userInput;
  	e.preventDefault()
    userInput = document.getElementById('new-task-description').value
  	let task = new Task(userInput);
    console.log(task.id)
    taskList.postTask(task, taskCount)
    document.getElementById(`delete-${taskCount}`).addEventListener("click", function(f){
      list.removeChild(this.parentElement)
    });
    taskCount++;

  });


});
