import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
})
export class NewTaskComponent implements OnInit {
  
  @Output() onNewTaskClicked: EventEmitter<any> = new EventEmitter<any>();


  constructor(
    public modalController: ModalController,
    public todoService: TodoService
  ) { 
  }

  ngOnInit() {}

  createNewTask() {
    if(!this.todoService.formData.name.length)
    return this.modalController.dismiss()

    this.dismiss();
    this.onNewTaskClicked.emit(this.todoService.formData)
    this.todoService.resetForm();
  
  }  

  toggleCategory() {
    document.getElementById('radio-icon').classList.remove('radio-'+ this.todoService.formData.category);
    this.todoService.formData.category = (this.todoService.formData.category == 'personal'? 'business': 'personal');
    document.getElementById('radio-icon').className += ' radio-' + this.todoService.formData.category;
  }

  
  
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  updateService(name: string | any) {
    this.todoService.formData.name = name;
  }
  
}
