// adds input because we are passing the todos in from another component
import { Component, OnInit, Input} from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  //  Input Properties will take anything passed to the component
  @Input() todo: Todo;
  
  constructor() { }

  ngOnInit(): void {
  }

}
