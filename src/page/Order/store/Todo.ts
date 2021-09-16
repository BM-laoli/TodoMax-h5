import { action, observable } from "mobx";

class Todo {
    @observable 
    title = "";

    @observable 
    finished = false;


    @action
    getValiue () {
      return '666'
    }
    
}

export default Todo