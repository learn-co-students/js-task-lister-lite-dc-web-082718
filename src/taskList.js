class TaskList {


    //add event listener for each task and a delete button with data set being task value


    addFormListener(){

        let frm = document.getElementById("create-task-form");

        frm.addEventListener("submit",function(event){
            event.preventDefault();

            let newDesc = document.getElementById("new-task-description");
            let desc = newDesc.value;
            let newTask = new Task(desc);


            let list = document.getElementById("tasks");
            list.appendChild(newTask.task);
            // debugger;
            let findTask =  newTask.task.children[0]
            findTask.addEventListener("click", function(){
                // debugger;
                findTask.parentElement.remove(findTask);
            });
            frm.reset();
        });




    }

}
