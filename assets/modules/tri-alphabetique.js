export function triAlphabetique() {
  const list = document.getElementById("container_list");
  const listDoing = document.getElementById("container_doing");
  const listDone = document.getElementById("container_done");
  let listTasks = JSON.parse(localStorage.getItem("tasks"));
  listTasks.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  const ulElements = document.querySelectorAll("ul");
  ulElements.forEach((ul) => {
    ul.innerHTML = "";
  });

  listTasks.forEach((task) => {
    const newTask = document.createElement("li");
    newTask.classList.add(task.status);
    console.log(task);
    newTask.innerHTML = `
          <span class="hidden">${task.id}</span>
          <span>${task.name}</span> 
          <span>${task.inputTasks}</span> 
          <span> Date limite: <span class="date_limite">${task.date}</span> </span> 
          <span> Deadline: <span class="deadline"></span></span>
          <div>
            <button class="done-button">Done</button>
            <button class="doing-button">Doing</button>
            <button class="todo-button">To Do</button>
            <button class="delete-button">Delete</button>
          </div>
        `;

    if (task.status == "todo-button") {
      list.appendChild(newTask);
    } else if (task.status == "doing-button") {
      listDoing.appendChild(newTask);
    } else if (task.status == "done-button") {
      listDone.appendChild(newTask);
    }
  });
}
