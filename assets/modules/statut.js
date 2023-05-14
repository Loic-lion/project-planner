import { updateStatusTaskFromArray } from "./stock.js";

export function statut() {
  let allButtons = document.querySelectorAll(".doing-button, .todo-button, .done-button");
  let containerDoing = document.getElementById("container_doing");
  let containerDone = document.getElementById("container_done");
  let containerTodo = document.getElementById("container_list");
  console.log(allButtons);

  allButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.target;
      const li = target.closest("li");

      if (target.matches(".todo")) {
        li.classList.remove("doing", "done");
        containerTodo.appendChild(li);
      } else if (target.matches(".doing")) {
        li.classList.remove("done");
        li.classList.add("doing");
        containerDoing.appendChild(li);
      } else if (target.matches(".done")) {
        li.classList.remove("doing");
        li.classList.add("done");
        containerDone.appendChild(li);
      }
      const id = li.getElementsByTagName("span")[0].innerHTML;
      updateStatusTaskFromArray(id, target.className);
      // const tasks = list.innerHTML;
      // localStorage.setItem("tasks", tasks);
    });
  });
}
