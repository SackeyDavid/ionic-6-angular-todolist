import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.page.html',
  styleUrls: ['./edit-task.page.scss'],
})
export class EditTaskPage implements OnInit {
  
  task: any;

  constructor(
    private route: ActivatedRoute,
    public todoService: TodoService,
    public location: Location,
    private router: Router
  ) { }

  ngOnInit() {
    this.task = this.todoService.getTodo(this.route.snapshot.params['id']);
    if(!this.task) this.router.navigateByUrl('home');
    this.todoService.formData = this.task;
  }

  toggleCategory() {
    document.getElementById('radio-icon').classList.remove('radio-'+ this.todoService.formData.category);
    this.todoService.formData.category = (this.todoService.formData.category == 'personal'? 'business': 'personal');
    document.getElementById('radio-icon').className += ' radio-' + this.todoService.formData.category;
  }

  updateService(name: string) {
    this.todoService.formData.name = name;
  }

  goBack() {
    this.location.back();
    this.todoService.resetForm();
  }

  updateTodo() {
    this.todoService.updateTodo();
    this.location.back();
    this.todoService.resetForm();
  }
}
