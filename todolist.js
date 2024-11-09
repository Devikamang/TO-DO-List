function addTask() {
    const taskInput = document.getElementById('taskInput');
    const datetimeInput = document.getElementById('datetimeInput');
    
    const task = taskInput.value;
    const datetime = datetimeInput.value;
    
    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create list item for the task
    const li = document.createElement('li');

    if (datetime !== "") {
        // If date and time is provided
        li.innerHTML = `
            ${task} 
            <span>${new Date(datetime).toLocaleString()}</span>
            <div class="task-actions">
                <button class="complete-btn" onclick="markAsCompleted(this)">Complete</button>
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            </div>
        `;
    } else {
        // If only the task is provided
        li.innerHTML = `
            ${task}
            <div class="task-actions">
                <button class="complete-btn" onclick="markAsCompleted(this)">Complete</button>
                <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
            </div>
        `;
    }

    taskList.appendChild(li);

    // Clear input fields after adding
    taskInput.value = "";
    datetimeInput.value = "";
}

function deleteTask(element) {
    element.parentElement.parentElement.remove();
}

function markAsCompleted(element) {
    const taskItem = element.parentElement.parentElement;
    taskItem.classList.toggle('completed');
}
