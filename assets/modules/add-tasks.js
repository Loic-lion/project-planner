import { addTaskToArrays } from "./handleTasks.js";
import { updateTask } from "./handleTasks.js";
///////////////AJOUT DES TACHES//////////////
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
  
  addTaskToArrays({
    name:inputName.value,
    inputTasks:inputTasks.value,
    date:inputDate.value
  })


  const newTask = document.createElement("li");
  newTask.innerHTML = ` <span>${inputNameDone}</span> 
    <span>${inputTaskDone}</span> 
    <span> Date limite: <span class="date_limite">${inputDateDone}</span> </span> 
    <span> Deadline: <span class="deadline"></span></span>
    <div class="container_list_checkbox"> 
    <input type="radio" name="${inputNameDone} value="done" />Done
    <input type="radio" name="${inputNameDone} value="doing" />Doing
    <input type="radio" name="${inputNameDone} value="todo" checked/>To do
    </div> `;
  newTask.setAttribute("id", "content_list");
  list.appendChild(newTask);
  
  

  /////////////////LOCAL STORAGE + RESET SEARCHBARS//////////
  // const tasks = list.innerHTML;
  // localStorage.setItem("tasks", tasks);
  inputName.value = "";
  inputDate.value = "";
  inputTasks.value = "";

  // timeRemainer();
}
updateTask();
// function timeRemainer() {
//   const inputDate = document.getElementById("searchbar_date");
//   const inputDateDone = inputDate.value;
//   const remainTime = inputDateDone - Date.now;
//   const daysLeft = Math.ceil(remainTime / (1000 * 3600 * 24));
//   console.log(daysLeft);  
// }
