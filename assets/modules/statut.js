export function statut() {
  let allButtons = document.querySelectorAll(".doing, .todo, .done");
  console.log(allButtons);

  allButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = event.target;
      const li = target.closest("li");

      if (target.matches(".todo")) {
        li.classList.remove("doing", "done");
      } else if (target.matches(".doing")) {
        li.classList.remove("done");
        li.classList.add("doing");
      } else if (target.matches(".done")) {
        li.classList.remove("doing");
        li.classList.add("done");
      }
      // const tasks = list.innerHTML;
      // localStorage.setItem("tasks", tasks);
    });
  });
}
