import { display } from "./display.js";
import { updateStatusTaskFromArray } from "./stock.js";

export function status(event) {
  let allButtons = document.querySelectorAll(
    ".doing-button, .todo-button, .done-button"
  );
  let containerDoing = document.getElementById("container_doing");
  let containerDone = document.getElementById("container_done");
  let containerTodo = document.getElementById("container_list");
  console.log(allButtons);

  const target = event.target;
  const li = target.closest("li");

  if (target.matches(".todo-button")) {
    li.classList.remove("doing", "done");
    containerTodo.appendChild(li);
  } else if (target.matches(".doing-button")) {
    li.classList.remove("done");
    li.classList.add("doing");
    containerDoing.appendChild(li);
  } else if (target.matches(".done-button")) {
    li.classList.remove("doing");
    li.classList.add("done");
    containerDone.appendChild(li);
  }
  console.log(event.target);
  const id = li.getElementsByTagName("span")[0].innerHTML;
  updateStatusTaskFromArray(id, target.className);
}
