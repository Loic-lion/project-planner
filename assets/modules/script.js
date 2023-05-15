import { nouvelleTache } from "./add-tasks.js";
import { initDeadlines } from "./deadline.js";
import { display } from "./display.js";
// import { getLocalStorage } from "./stock.js";
import { deleteTache } from "./delete.js";
import { triAlphabetique } from "./tri-alphabetique.js";
import { triDeadline } from "./tri-deadline.js";
////////////////////////////////////////

const boutonAd = document.getElementById("input_add");
const form = document.querySelector("form");
const boutonTriAlpha = document.getElementById("button_noms");
const boutonTriDeadline = document.getElementById("button_temps");

//////////////////Création des tâches////////////

boutonAd.addEventListener("click", nouvelleTache);

////////////////////DEADLINE////////////////////

window.onload = () => {
  initDeadlines();
};

display();
deleteTache();
//////////////////////TRI ALPHABETIQUE///////////
boutonTriAlpha.addEventListener("click", triAlphabetique);

////////////////////////TRI DEADLINE/////////////////////
boutonTriDeadline.addEventListener("click", triDeadline);
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
