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

  list.appendChild(newTask);
  /////////////////////////////DEADLINE///////////////////////////////
  // const dateLimiteSpan = document.querySelector(".date_limite");
  // const deadlineSpan = document.querySelector(".deadline");

  // const dateLimite = new Date(dateLimiteSpan.textContent);
  // const dateNow = new Date();
  // const diffTime = Math.abs(dateLimite - dateNow);
  // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // deadlineSpan.textContent = `${diffDays} jour(s) restant(s)`;

  ///////////////LOCAL STORAGE + RESET SEARCHBARS//////////
  const tasks = list.innerHTML;
  localStorage.setItem("tasks", tasks);
  inputName.value = "";
  inputDate.value = "";
  inputTasks.value = "";
}
