// adds input because we are passing the todos in from another component
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  //  Input Properties will take anything passed to the component
  @Input() todo: Todo;
  //  emitting from the component to the parent component
  //  deleteTodo will be delt with in the parent component and passed the todo that needs deletion
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  // inject the todoservice
  constructor(private todoService: TodoService) {

  }

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
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => {
      console.log(todo);
    });
  }

  onDelete(todo) {
    // Emitt an event up to the parent component that it is needing to be deleted
    this.deleteTodo.emit(todo);
  }

}
