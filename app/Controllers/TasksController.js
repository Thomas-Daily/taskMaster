export class TaskController {

  constructor() {

  }


  createTask(taskID) {
    try {
      window.event.preventDefault()
      const form = window.event.target
      console.log(taskID)
      console.log('create task is working')

    } catch (error) {
      console.error(error)
    }
  }

}