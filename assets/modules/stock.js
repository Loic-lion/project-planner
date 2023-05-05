export let arrayTasks = [];

export function addTaskToArrays(task) {
  arrayTasks.push(task);
  console.log(arrayTasks);
}
export function deleteTask() {
  // TASK_ARRAY.find(task)
  updateLocalStorage();
}
export function updateTask() {
  updateLocalStorage();
}
export function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(arrayTasks));
}
