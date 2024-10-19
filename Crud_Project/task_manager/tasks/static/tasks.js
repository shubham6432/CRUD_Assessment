document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    function fetchTasks() {
        fetch('/api/tasks/')
        .then(response => response.json())
        .then(data => {
            taskList.innerHTML = '';
            data.forEach(task => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>${task.title}</strong> - ${task.description} [${task.status}]
                    <button onclick="deleteTask(${task.id})">Delete</button>
                    <button onclick="updateTask(${task.id}, '${task.title}', '${task.description}', '${task.status}')">Update</button>
                `;
                taskList.appendChild(li);
            });
        });
    }

    taskForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;

        fetch('/api/tasks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description, status: 'Pending' })
        }).then(() => {
            fetchTasks();
        });
    });

    window.deleteTask = function(id) {
        fetch(`/api/tasks/${id}/`, {
            method: 'DELETE',
        }).then(() => {
            fetchTasks();
        });
    }

    window.updateTask = function(id, title, description, status) {
        const newStatus = status === 'Pending' ? 'Completed' : 'Pending';
        fetch(`/api/tasks/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, description, status: newStatus })
        }).then(() => {
            fetchTasks();
        });
    }

    fetchTasks();
});
