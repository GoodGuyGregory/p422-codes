import { Component, OnInit } from '@angular/core';
//  adds component from the model
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //  stores todos locally
  todos: Todo[];

  // on components the constructor is used to import services 
  constructor() { }

  //  LifeCycle Method:
  ngOnInit(): void {
    //  creates arrays on the component's creation
    this.todos = [
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
