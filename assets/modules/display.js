// import { arrayTasks } from "./stock.js";

import { status } from "./statut.js";
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
        <span class ="hidden">${task.id}</span>
        <span>${task.name}</span> 
        <span>${task.inputTasks}</span> 
        <span> Date limite: <span class="date_limite">${task.date}</span> </span> 
        <span> Deadline: <span class="deadline"></span></span>
      `;
    let divButton = document.createElement("div");
    let buttonDone = document.createElement("button");
    let buttonDoing = document.createElement("button");
    let buttonTodo = document.createElement("button");
    let buttonDel = document.createElement("button");
    divButton.classList.add("container_button");
    buttonTodo.classList.add("todo-button");
    buttonDoing.classList.add("doing-button");
    buttonDone.classList.add("done-button");
    buttonDel.classList.add("delete-button");
    buttonTodo.textContent = "To Do";
    buttonDoing.textContent = "Doing";
    buttonDone.textContent = "Done";
    buttonDel.textContent = "Delete";

    buttonTodo.addEventListener("click", (e) => status(e));
    buttonDoing.addEventListener("click", (e) => status(e));
    buttonDone.addEventListener("click", (e) => status(e));

    //   <div class="container_button">
    //   <button class="done-button">Done</button>
    //   <button class="doing-button">Doing</button>
    //   <button class="todo-button">To Do</button>
    //   <button class="delete-button">Delete</button>
    // </div>

    divButton.append(buttonTodo, buttonDoing, buttonDone, buttonDel);
    newTask.append(divButton);

    if (task.status == "todo-button") {
      list.appendChild(newTask);
    } else if (task.status == "doing-button") {
      listDoing.appendChild(newTask);
    } else if (task.status == "done-button") {
      listDone.appendChild(newTask);
    }
    console.log(list);
  });
}
