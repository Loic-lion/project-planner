// import { deleteTask } from "./stock.js";
import { updateTask } from "./stock.js";
export function deleteTache() {
    const list = document.querySelector(".container");
  
    list.addEventListener("click", (event) => {
      if (event.target && event.target.matches("button.delete")) {
        const listTask = event.target.closest("li");
        
        // deleteTask();
        updateTask();
        listTask.remove();
      }
    });
  }