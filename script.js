document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const newTaskInput = document.getElementById('new-task');
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        newTaskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <span>${taskText}</span>
        <div class="task-actions">
            <button class="complete">✔️</button>
            <button class="edit">✏️</button>
            <button class="delete">❌</button>
        </div>
    `;

    listItem.querySelector('.complete').addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    listItem.querySelector('.edit').addEventListener('click', function() {
        const newTaskText = prompt('Edit task', taskText);
        if (newTaskText !== null) {
            listItem.querySelector('span').textContent = newTaskText;
        }
    });

    listItem.querySelector('.delete').addEventListener('click', function() {
        taskList.removeChild(listItem);
    });

    taskList.appendChild(listItem);
}
