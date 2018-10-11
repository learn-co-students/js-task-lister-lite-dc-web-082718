document.addEventListener('DOMContentLoaded', function(){
  addSubmitListener();
})

function addSubmitListener()
{
  document.getElementById('submit').addEventListener('click', function(){
    event.preventDefault();

    let form = document.getElementById('create-task-form');
    let el = document.getElementById('new-task-description');
    let comment = el.value;
    let list = document.getElementById('tasks');
    // list.append(comment + '\n');

    let li = document.createElement("li");
    li.appendChild(document.createTextNode(comment));
    list.appendChild(li);
    form.reset();
  })
}
