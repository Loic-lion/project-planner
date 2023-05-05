export let tasks = [];

export function addTaskToArrays(task) {
    tasks.push(task)
    console.log(tasks)
}
export function deleteTask(task){
    // TASK_ARRAY.find(task)
    updateLocalStorage()
}
export function updateTask(task){
     updateLocalStorage()
}
export function updateLocalStorage(){
    localStorage.setItem("tache", JSON.stringify(tasks))
}