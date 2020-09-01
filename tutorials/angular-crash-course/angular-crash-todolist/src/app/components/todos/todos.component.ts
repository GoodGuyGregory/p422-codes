import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  // on components the constructor is used to import services 
  constructor() { }

  //  LifeCycle Method:
  ngOnInit(): void {
  }

}
