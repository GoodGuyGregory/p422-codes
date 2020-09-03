// adds input because we are passing the todos in from another component
import { Component, OnInit, Input } from '@angular/core';
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

  //  METHODS Go here
  // sets dynamic classes you wish to add to your component's elements
  setClasses() {
    let classes = {
      todo: true,
      //  sets the class for the todos based on completion to 'is-completed'
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo) {
    // console.log('toggle');
    // sets the todo to the opposite of what it was
    todo.completed = !todo.completed;
  }

  onDelete(todo) {
    console.log('delete');
  }

}
