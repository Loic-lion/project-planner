// import { arrayTasks } from "./stock.js";

import { getLocalStorage } from "./stock.js";

export function display() {
  const list = document.getElementById("container_list");
  const listDoing = document.getElementById("container_doing");
  const listDone = document.getElementById("container_done");

  list.innerHTML = "";
  listDoing.innerHTML = "";
  listDone.innerHTML = "";

  let arrayTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  console.log(arrayTasks);

  arrayTasks.forEach((task) => {
    const newTask = document.createElement("li");
    newTask.classList.add(task.status);
    console.log(task);
    newTask.innerHTML = `
        <span>${task.id}</span>
        <span>${task.name}</span> 
        <span>${task.inputTasks}</span> 
        <span> Date limite: <span class="date_limite">${task.date}</span> </span> 
        <span> Deadline: <span class="deadline"></span></span>
        <div>
          <button class="done-button">Done</button>
          <button class="doing-button">Doing</button>
          <button class="todo-button">To Do</button>
          <button class="delete-button">Delete</button>
        </div>
      `;

    if (task.status == "todo") {
      list.appendChild(newTask);
    } else if (task.status == "doing") {
      listDoing.appendChild(newTask);
    } else if (task.status == "done") {
      listDone.appendChild(newTask);
    }
    console.log(list);
  });
}
