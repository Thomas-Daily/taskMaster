import { appState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"


function _drawLists() {
  let template = ''
  appState.lists.forEach(list => {
    template += list.Template
  })
  setHTML('lists', template)

}
export class ListsController {
  constructor() {
    appState.on('lists', _drawLists)
    _drawLists()
  }


  createList() {
    try {
      window.event.preventDefault()
      const form = window.event.target
      let formData = getFormData(form)
      listsService.createList(formData)
      form.reset()
    } catch (error) {
      console.error('creating list', error);
    }

  }

}