import { generateId } from "../Utils/generateId.js"

export class List {
  constructor(data) {
    this.id = data.id || generateId()
    this.name = data.name
    this.color = data.color
  }

  get Template() {
    return `
    <div class="col-3">
      <div class="row">
        <div class="col-12 bg-primary">
          <h5>${this.name}</h5>
          <h6>You only have ??? tasks left!</h6>
        </div>
      </div>
      <div class="row" id='tasks'>
        <form class="bg-info rounded p-1" onsubmit="app.tasksController.createTask('${this.id}')">
          <div class="d-flex w-100 ">
            <div class="flex-grow-1">
              <div id='task'>
                
              </div>
              <input class="form-control square-right" type="text" required minlength="2" name="name" placeholder="Task..." />
              <label for="task" class="visually-hidden">Task</label>
            </div>
            <button type="submit" class="btn btn-info square-left" title="Add Item">
              <b><i class="mdi mdi-plus text-light"></i></b>
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>`
  }
}
