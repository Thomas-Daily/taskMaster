import { appState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTask() {
  let template = ''
  appState.tasks.forEach(task => {
    template += task.Template
  })
  setHTML('lists', template)
}

export class TasksController {

  constructor() {
    appState.on('tasks', _drawTask)
    _drawTask()
  }


  createTask(listID) {
    try {
      window.event.preventDefault()
      let form = window.event.target
      let formData = getFormData(form)
      formData.listID = listID
      tasksService.createTask(formData)
      form.reset()


    } catch (error) {
      console.error(error)
    }
  }

}