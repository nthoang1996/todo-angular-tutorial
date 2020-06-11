import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input()list: Array<Task>;
  @Output()itemDeleted = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {

  }

  notifyItemDeleted(task){
    this.itemDeleted.emit(task);
  }

}
