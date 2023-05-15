import { deleteTask } from "./stock.js";

export function deleteTache() {
  const list = document.querySelector(".container");

  list.addEventListener("click", (event) => {
    if (event.target && event.target.matches("button.delete-button")) {
      const listTask = event.target.closest("li");
      const id = listTask.getElementsByTagName("span")[0].innerHTML;
      deleteTask(id);
      listTask.remove();
    }
  });
}
