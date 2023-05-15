export function addTaskToArrays(task) {
  let arrayTasks = getLocalStorage();
  arrayTasks.push(task);
  console.log(arrayTasks);
  localStorage.setItem("tasks", JSON.stringify(arrayTasks));
  return arrayTasks;
}

export function deleteTask(id) {
  let index = -1;
  let arrayTasks = getLocalStorage();
  arrayTasks.forEach((storageTask) => {
    if (storageTask.id == id) {
      index = arrayTasks.indexOf(storageTask);
    }
  });
  if (index !== -1) {
    arrayTasks.splice(index, 1);
  }
  updateLocalStorage(arrayTasks);
}

export function updateTask() {
  updateLocalStorage();
}

export function updateLocalStorage(arrayTasks) {
  localStorage.setItem("tasks", JSON.stringify(arrayTasks));
}

export function getLocalStorage() {
  let arrayTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return arrayTasks;
}

export function updateStatusTaskFromArray(id, status) {
  let arrayTasks = getLocalStorage();
  arrayTasks.forEach((storageTask) => {
    if (storageTask.id == id) {
      storageTask.status = status;
    }
  });
  updateLocalStorage(arrayTasks);
}
