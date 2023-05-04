import { nouvelleTache } from "./add-tasks.js";

const boutonAd = document.getElementById("input_add");
const form = document.querySelector("form");

//////////////////Création des tâches////////////
boutonAd.addEventListener("click", nouvelleTache);
////////////////////Empecher le reset du submit///////////
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
//////////////////////Local Storage////////////////////
window.addEventListener("load", () => {
  const list = document.getElementById("container_list");
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    list.innerHTML = tasks;
  }
});
// localStorage.clear();
