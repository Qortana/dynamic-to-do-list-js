document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList = 'remove-btn';
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(span);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Event listener for Enter key in input
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
