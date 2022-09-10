import { appState } from "../AppState.js";
import { List } from "../Models/List.js";


class ListsService {

  createList(formData) {
    console.log('howdy')
    let list = new List(formData)
    appState.lists = [list, ...appState.lists]
    console.log(appState.lists)
  }

}

export const listsService = new ListsService()