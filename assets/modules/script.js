import { nouvelleTache } from "./add-tasks.js";
import { initDeadlines } from "./deadline.js";
import { display } from "./display.js";
// import { getLocalStorage } from "./stock.js";
import { status } from "./statut.js";
import { deleteTache } from "./delete.js";
import { triAlphabetique } from "./tri-alphabetique.js";
////////////////////////////////////////

const boutonAd = document.getElementById("input_add");
const form = document.querySelector("form");
const boutonTri = document.getElementById("button_noms");

//////////////////Création des tâches////////////

boutonAd.addEventListener("click", nouvelleTache);

////////////////////DEADLINE////////////////////

window.onload = () => {
  initDeadlines();
};

display();
status();
deleteTache();
//////////////////////TRI ALPHABETIQUE///////////
boutonTri.addEventListener("click", triAlphabetique);
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
