import { Component, signal } from '@angular/core';
import { Task } from '../task/task';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Taskservice } from '../taskservice';
@Component({
  selector: 'app-home',
  imports: [Task,ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  protected readonly title = signal('📋todolist✌️');
tasks: any[] = [];
taskForm = new FormGroup({
   title: new FormControl('', [Validators.required, Validators.minLength(3)])
    });
 constructor(private Taskservice: Taskservice,private fb: FormBuilder) {
  }
   onSubmit() {
    if (this.taskForm.valid) {
    this.tasks.push({ title: this.taskForm.value.title, done: false });
    this.taskForm.reset();
  }
  }

}
