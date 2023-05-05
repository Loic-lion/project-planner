// import { arrayTasks } from "./stock.js";

import { getLocalStorage } from "./stock.js";

export function display() {
  const list = document.getElementById("container_list");
  list.innerHTML = "";

  let arrayTasks = JSON.parse(localStorage.getItem("tasks"));
  console.log(arrayTasks);

  arrayTasks.forEach((task) => {
    const newTask = document.createElement("li");
    console.log(task);
    newTask.innerHTML = `
        <span>${task.name}</span> 
        <span>${task.inputTasks}</span> 
        <span> Date limite: <span class="date_limite">${task.date}</span> </span> 
        <span> Deadline: <span class="deadline"></span></span>
        <div>
          <button class="done">Done</button>
          <button class="doing">Doing</button>
          <button class="todo">To Do</button>
          <button class="delete">Delete</button>
        </div>
      `;
    list.appendChild(newTask);
    console.log(list);
  });
}
