import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  taskName: string = '';
  @Output() taskAdded = new EventEmitter<Task>();
  
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(event) { // with type info
    const args = {
      id: Math.floor(Math.random() * 100) + 1,
      name: this.taskName,
      isDone: false
    };
    this.taskAdded.emit(args);
    this.taskName = '';
  }

}
