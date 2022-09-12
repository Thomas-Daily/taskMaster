import { appState } from "../AppState";
import { Task } from "../Models/Task";

class TasksService {
  createTask(formData) {
    let task = new Task(formData)
    appState.tasks = [task, ...appState.tasks]
    console.log(appState.tasks)
  }

}

export const tasksService = new TasksService()