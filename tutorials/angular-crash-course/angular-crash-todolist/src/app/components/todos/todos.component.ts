import { Component, OnInit } from '@angular/core';
//  adds component from the model
import { Todo } from '../../models/Todo';
//  gets the todos from the service
import { TodoService } from '../../service/todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //  stores todos locally
  todos: Todo[];

  // on components the constructor is used to import services 
  constructor(private todoService: TodoService) { }

  //  LifeCycle Method:
  ngOnInit(): void {
    //  creates arrays on the component's creation
    // this.todos = [

    // ]

    //  gets all of the todos from the injectable service provider
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });

  }

  // deleteTodo will grab the Todo that needs to be deleted and recieve the event object
  deleteTodo(todo: Todo) {
    // Test component
    // console.log('delete me');

    // Delete from the UI
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Delete from the server
    this.todoService.deleteTodo(todo).subscribe();
  }

}
