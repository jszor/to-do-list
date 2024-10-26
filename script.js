let newTask = document.getElementById('new-task');
let enterTask = document.getElementById('enter-task');
let taskList = document.getElementById('task-list');

function crossOffTask(checkbox, task) {
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            task.style.textDecoration = 'line-through';
        } else {
            task.style.textDecoration = 'none';
        }
    });
}
function addTask() {
    let task = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    crossOffTask(checkbox, task);
    task.appendChild(checkbox);
    task.appendChild(document.createTextNode(newTask.value));
    taskList.appendChild(task);
    newTask.value = '';
}

enterTask.addEventListener('click', addTask);

document.querySelectorAll('#task-list li').forEach(item => {
    let checkbox = item.querySelector('input[type="checkbox"]');
    crossOffTask(checkbox, item);
});