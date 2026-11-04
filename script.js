// 1. Arreglo inicial de objetos con tareas de Ciencias Naturales
let tasks = [
  { description: "Estudiar el ciclo del agua", completed: false },
  { description: "Preparar informe de fotosíntesis", completed: true },
];

const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const tasksList = document.getElementById("tasks-list");

// 2. Función renderTasks: limpia el DOM y re-renderiza según el arreglo de tareas[cite: 13]
function renderTasks() {
  tasksList.innerHTML = "";

  // Ordenamos para que las tareas completadas aparezcan al final[cite: 13]
  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);

  sortedTasks.forEach((task) => {
    const originalIndex = tasks.indexOf(task);

    const taskItem = document.createElement("div");
    taskItem.className = `task-item ${task.completed ? "completed" : ""}`;

    taskItem.innerHTML = `
      <div class="task-info" onclick="toggleTask(${originalIndex})">
        <input type="checkbox" ${task.completed ? "checked" : ""} style="cursor: pointer;">
        <span class="task-text">${task.description}</span>
      </div>
      <button class="delete-btn" onclick="deleteTask(${originalIndex})">🗑️</button>
    `;

    tasksList.appendChild(taskItem);
  });
}

// 3. Agregar nueva tarea al arreglo y re-renderizar[cite: 13]
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const description = taskInput.value.trim();

  if (description !== "") {
    tasks.push({ description, completed: false });
    taskInput.value = "";
    renderTasks();
  }
});

// 4. Marcar o desmarcar tarea (actualiza estado en el arreglo y re-renderiza)[cite: 13]
function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// 5. Eliminar tarea del arreglo y re-renderizar[cite: 13]
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Renderizado inicial al cargar la página
renderTasks();
