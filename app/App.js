import { ListsController } from "./Controllers/ListsController.js";
import { TaskController } from "./Controllers/TasksController.js";


class App {
  listsController = new ListsController()

  taskController = new TaskController()
}

window["app"] = new App();
