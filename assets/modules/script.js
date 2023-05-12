import { nouvelleTache } from "./add-tasks.js";
import { initDeadlines } from "./deadline.js";
import { display } from "./display.js";
import { getLocalStorage } from "./stock.js";
import { statut } from "./statut.js";
import { deleteTache } from "./delete.js";
////////////////////////////////////////

const boutonAd = document.getElementById("input_add");
const form = document.querySelector("form");

//////////////////Création des tâches////////////

boutonAd.addEventListener("click", nouvelleTache);

////////////////////DEADLINE////////////////////

window.onload = () => {
  initDeadlines();
};

display();
statut();
deleteTache();
////////////////////Empecher le reset du submit///////////

form.addEventListener("submit", function (event) {
  event.preventDefault();
});
//////////////////////Local Storage////////////////////

// window.addEventListener("load", () => {
//   const list = document.getElementById("container_list");
//   const tasks = localStorage.getItem("tasks");
//   if (tasks) {
//     list.innerHTML = tasks;
//   }
// });

// localStorage.clear();
