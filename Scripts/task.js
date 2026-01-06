const input = document.getElementById("taskInput");
const btn = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const endDayBtn = document.getElementById("clearCompletedButton");
const confirmModal = document.getElementById("confirmModal");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");

let tasks = [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    updateProgress()
}

function loadTasks() {
    const data = localStorage.getItem("tasks");

    if (!data) return;

    tasks = JSON.parse(data);
    tasks.forEach(createtaskElement);
    updateProgress()
}

function createtaskElement(task) {
    const li = document.createElement("li");
    const text = document.createElement("span")
    const completeBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const checkImg = document.createElement("img");
    const deleteImg = document.createElement("img");
    
    text.textContent = task.text;
    checkImg.src = "Assets/check.png";
    checkImg.alt = "Complete";
    deleteImg.src = "Assets/delete.png";
    deleteImg.alt = "Delete";
    completeBtn.appendChild(checkImg);
    deleteBtn.appendChild(deleteImg);

    if (task.completed) {
        li.classList.add('completed');
        taskList.appendChild(li);
    } else {
        taskList.prepend(li);
    }
    
    completeBtn.addEventListener('click', () => {
        const completed = li.classList.toggle('completed');
        task.completed = completed;

        completed ? taskList.appendChild(li) : taskList.prepend(li);

      saveTasks();
    });

    deleteBtn.addEventListener("click", () => {
        tasks = tasks.filter(t => t !== task);
        li.remove();
        saveTasks();
    });

    li.append(text, completeBtn, deleteBtn);
}

function updateProgress() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (progress / 100) * circumference;
    
    progressBar.style.strokeDashoffset = offset;
    progressText.textContent = progress + '%';
}

endDayBtn.addEventListener("click", () => {
    confirmModal.classList.remove("hidden");
});

confirmYes.addEventListener("click", () => {
    tasks = [];
    taskList.innerHTML = "";
    saveTasks();
    updateProgress();
    confirmModal.classList.add("hidden");
});

confirmNo.addEventListener("click", () => {
    confirmModal.classList.add("hidden");
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") btn.click();
});

btn.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    const task = {
        text: input.value.toLowerCase(),
        completed: false
    };

    tasks.push(task);
    createtaskElement(task);
    saveTasks();

    input.value = "";
});
loadTasks();

    

    

    

    


