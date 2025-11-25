import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class Taskservice {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos'

 constructor(private http: HttpClient) { }

  // Get all todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  // Get a specific todo by ID
  getTodoById(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }
  private tasks = [
{ title: 'Learn Angular', done: false },
{ title: 'Build ToDoList App', done: false },
{ title: 'Celebrate test !', done: true }
];
getTasks() {
return this.tasks;
}
addTask(title: string) {
this.tasks.push({ title, done: false });
}
}
