export class Task {


  constructor() {
    this.name = data.name
    this.id = data.id || generateId()
    this.listId = data.listId

  }

  get Template() {
    return `
    <li class="d-flex justify-content-between list-group-item">
                  <span>${this.name}</span>
                  <span><i onclick="app.itemsController.removeItem('${this.id}')" class="mdi mdi-close text-danger selectable rounded"  title="Remove Item"></i></span>
                </li>`

  }
}