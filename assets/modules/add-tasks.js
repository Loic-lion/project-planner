import { display } from "./display.js";
import {
  updateLocalStorage,
  addTaskToArrays,
  getLocalStorage,
} from "./stock.js";

export function nouvelleTache() {
  const inputName = document.getElementById("searchbar_name");
  const inputTasks = document.getElementById("searchbar_task");
  const inputDate = document.getElementById("searchbar_date");
  // const list = document.getElementById("container_list");

  const inputTaskDone = inputTasks.value;
  const inputNameDone = inputName.value;
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

  let task = {
    name: inputNameDone,
    inputTasks: inputTaskDone,
    date: inputDateDone,
    status: "todo-button",
    id: Date.now(),
  };
  addTaskToArrays(task);
  updateLocalStorage(getLocalStorage());

  inputName.value = "";
  inputDate.value = "";
  inputTasks.value = "";
  display();
}
