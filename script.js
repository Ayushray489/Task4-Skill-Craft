document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const addTaskButton = document.getElementById('add-task');
    const clearTasksButton = document.getElementById('clear-tasks');

    // Function to add a new task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('click', toggleTask);

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-btn');
            deleteButton.addEventListener('click', deleteTask);

            li.appendChild(checkbox);
            li.appendChild(taskSpan);
            li.appendChild(deleteButton);

            taskList.appendChild(li);
            taskInput.value = '';
        }
    };

    // Function to toggle task completion
    const toggleTask = (event) => {
        const listItem = event.target.parentElement;
        listItem.classList.toggle('completed');
    };

    // Function to delete a task
    const deleteTask = (event) => {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    };

    // Function to clear completed tasks
    const clearCompletedTasks = () => {
        const completedTasks = document.querySelectorAll('.completed');
        completedTasks.forEach(task => taskList.removeChild(task));
    };

    // Event listeners
    addTaskButton.addEventListener('click', addTask);
    clearTasksButton.addEventListener('click', clearCompletedTasks);

    // Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
