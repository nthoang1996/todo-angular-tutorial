import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() key: Number;
  @Input() value: Task;
  @Output() itemDeleted = new EventEmitter<Task>();
  constructor() { }

  ngOnInit(): void {
  }

  notifyItemDeleted(event){
    this.itemDeleted.emit(this.value);
  }

}
