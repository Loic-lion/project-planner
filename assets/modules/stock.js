export function addTaskToArrays(task) {
  let arrayTasks = getLocalStorage();
  arrayTasks.push(task);
  console.log(arrayTasks);
  localStorage.setItem("tasks", JSON.stringify(arrayTasks));
  return arrayTasks;
}
export function deleteTask() {
  // TASK_ARRAY.find(task)
  updateLocalStorage();
}
export function updateTask() {
  updateLocalStorage();
}
export function updateLocalStorage(arrayTasks) {
  localStorage.setItem("tasks", JSON.stringify(arrayTasks));
}

export function getLocalStorage() {
  let arrayTasks = JSON.parse(localStorage.getItem("tasks"));
  return arrayTasks;
}
