import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: Array<Task>;
  shownTasks: Array<Task>;

  constructor() { }

  ngOnInit(): void {
    this.tasks = [
      { id: 1, name: 'Pay Bills', isDone: true },
      { id: 2, name: '@vue/cli vs create-react-app', isDone: false },
      { id: 3, name: 'vue-router vs react-router', isDone: false },
      { id: 4, name: 'redux vs vuex', isDone: false }
    ]
    this.shownTasks = [...this.tasks];
  }

  addTask(task){
    this.tasks.push(task);
    this.shownTasks.push(task);
  }

  setTaskDone(task) {
    this.tasks.map(item => {
      if (item.id === task.id) item.isDone = true;
    });
  }

  filterTasks(args) {
    const lcTerm = args.toLowerCase();
    this.shownTasks = this.tasks.filter(item =>
      item.name.toLowerCase().includes(lcTerm)
    );
  }
}
