import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../services/todo.service';
import 'hammerjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  
  @Input() task: any; 
  @Output() onEditTaskClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public todoService: TodoService
  ) { }

  ngOnInit() {
  }

  onMove() {
    this.todoService.deleteTodo(this.task.taskId);
  }

  openEditPage() {
    this.onEditTaskClicked.emit(this.task);    
  }

}
