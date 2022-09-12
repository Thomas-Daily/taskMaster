import { appState } from "../AppState.js";
import { Task } from "../Models/Task.js";

class TasksService {
  createTask(formData) {
    let task = new Task(formData)
    appState.tasks = [task, ...appState.tasks]
  }

}

export const tasksService = new TasksService()