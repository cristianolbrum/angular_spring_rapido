import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = 'http://localhost:8080/api/todos/'

  constructor(private http: HttpClient) {
    
   }

  salvar(todo : Todo): Observable<Todo>{
    return this.http.post<Todo>(this.apiUrl,todo)
  }

}