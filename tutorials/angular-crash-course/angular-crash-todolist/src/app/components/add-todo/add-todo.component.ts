import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  // any prevents the specificity contraints of having access to the TODO id
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  //  form inputs need to be assigned to components as properties
  title: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      //  because the input is bound the the component property with this.
      title: this.title,
      completed: false
    }

    // pass the todo into the other components to be displayed
    this.addTodo.emit(todo);
  }

}
