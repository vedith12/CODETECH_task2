
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
window.onload = () => {
    renderTasks();
};

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText) {
        tasks.push(taskText);
        saveTasks();
        renderTasks();
        taskInput.value = "";
    }
}

function renderTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; 

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task-item";
        li.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function editTask(index) {
    const newTask = prompt("Edit your task:", tasks[index]);
    if (newTask) {
        tasks[index] = newTask.trim();
        saveTasks();
        renderTasks();
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}
