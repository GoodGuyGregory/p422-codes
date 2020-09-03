//  allows for constructor injection into other components
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  // HARD CODED TEST DATA:
  getTodos() {
    return [
      {
        id: 1,
        title: 'First Todo',
        completed: false
      },
      {
        id: 2,
        title: 'Second Todo',
        completed: true
      },
      {
        id: 3,
        title: 'Third Todo',
        completed: false
      },
    ]
  }
}
