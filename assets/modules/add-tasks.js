import { updateLocalStorage, addTaskToArrays } from "./stock.js";

export function nouvelleTache() {
  const inputName = document.getElementById("searchbar_name");
  const inputTasks = document.getElementById("searchbar_task");
  const inputDate = document.getElementById("searchbar_date");
  const list = document.getElementById("container_list");

  const inputTaskDone = inputName.value;
  const inputNameDone = inputTasks.value;
  const inputDateDone = inputDate.value;

  if (inputTaskDone.trim() == "") {
    alert("Entrez du texte pour créer une nouvelle tâche");
    return false;
  }

  if (inputNameDone.trim() == "") {
    alert("Entrez du texte pour nommer une nouvelle tâche");
    return false;
  }

  if (inputDateDone.trim() == "") {
    alert("Entrez une date pour créer une nouvelle tâche");
    return false;
  }

  const newTask = document.createElement("li");
  newTask.innerHTML = ` <span>${inputNameDone}</span> 
  <span>${inputTaskDone}</span> 
  <span> Date limite: <span class="date_limite">${inputDateDone}</span> </span> 
  <span> Deadline: <span class="deadline"></span></span>
  <div>
  <button class= "done" >Done</button>
  <button class= "doing" >Doing</button>
  <button class= "todo" >To Do</button>
  </div> `;

  list.appendChild(newTask);

  // Mise à jour du tableau des tâches dans localStorage
  addTaskToArrays(newTask);
  updateLocalStorage();

  inputName.value = "";
  inputDate.value = "";
  inputTasks.value = "";
}
