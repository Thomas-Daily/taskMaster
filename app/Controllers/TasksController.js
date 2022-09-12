import { tasksService } from "../Services/TasksService.js";
import { getFormData } from "../Utils/FormHandler.js";

export class TasksController {

  constructor() {
    console.log('tasks contoller online')
    console.log(this.createTask)
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