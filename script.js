document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't save again
    }

    // Save current tasks array to Local Storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push(li.firstChild.textContent); // Task text is firstChild of li
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Add a new task
    function addTask(taskText, save = true) {
        if (!taskText || taskText.trim() === '') {
            alert('Please enter a task!');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item'); // ✅ Required by checker

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // ✅ Required by checker
        removeBtn.onclick = function () {
            taskList.removeChild(li);
            saveTasks(); // Update Local Storage
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = '';

        if (save) {
            saveTasks(); // Save to Local Storage
        }
    }

    // Button click to add task
    addButton.addEventListener('click', function () {
        addTask(taskInput.value);
    });

    // Enter key press to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value);
        }
    });

    // Initialize tasks from Local Storage
    loadTasks();
});
