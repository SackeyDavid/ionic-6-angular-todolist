import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sliderConfig = {
    spaceBetween: 1,
    slidesPerView: 1.7,
  };

  // tasks = [];

  constructor(private router: Router, public todoService: TodoService) {}

  openNewTask() {
    this.router.navigateByUrl('new-task');
  }

  addNewTask(e: any) {
    this.todoService.createTodo();
  }

  openEditPage(data: any) {
    this.router.navigate(['edit-task', data.taskId]);
  }
}
