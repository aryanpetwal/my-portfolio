let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let taskStats = document.getElementById("taskStats");

function addTask() {
    let task = taskInput.value;

    if (task === "") {
        return;
    }

    let li = document.createElement("li");
    let taskText = document.createElement("span");

    taskText.textContent = "[DONE] " + task;

    li.appendChild(taskText);

    taskText.onclick = function () {
        taskText.style.textDecoration =
            taskText.style.textDecoration === "line-through"
                ? "none"
                : "line-through";

        updateStats();
    };

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    deleteButton.onclick = function (event) {
        event.stopPropagation();
        li.remove();
        updateStats();
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    updateStats();
    taskInput.value = "";
}

function updateStats() {
    let total = taskList.children.length;
    let completed = 0;

    for (let task of taskList.children) {
        let taskText = task.querySelector("span");

        if (taskText.style.textDecoration === "line-through") {
            completed++;
        }
    }

    let pending = total - completed;

    taskStats.textContent =
        "Total: " + total +
        " | Completed: " + completed +
        " | Pending: " + pending;
}