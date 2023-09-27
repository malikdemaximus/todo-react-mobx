import { makeObservable, observable, action, computed } from 'mobx';
import ApiService from './ApiService'; // Import your ApiService

class TodoStore {
  todos = [];



  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
      lastId: computed,
      // Add your MobX actions for fetching and updating tasks here
    });
    this.fetchTasks()
  }

  addTodo(name) {
    console.log({title: name, id: this.lastId + 1})
    this.todos.push({title: name, id: this.lastId + 1})

  }

  removeTodo(taskId) {
    const index = this.todos.findIndex((task) => task.id === taskId)
    this.todos.splice(index, 1)
  }

  get lastId() {
    return this.todos.length > 0 ? this.todos[this.todos.length - 1].id : 0
  }

  // ...

  async fetchTasks() {
    const tasks = await ApiService.getTasks();
    this.todos = tasks;
  }

  // ...
}

const todoStore = new TodoStore();

export default todoStore;