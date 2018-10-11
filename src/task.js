class Task {

    constructor(task){



        this.task = document.createElement("li");
        this.task.innerText = task;

        this.button = document.createElement("button");
        this.button.innerText = "X";
        this.button.dataset.description = task;



        this.task.appendChild(this.button);
    }


}
