import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //  without observable
    // this.tasks = this.taskService.getTasks();

    // subscribes to the observables and sets them to the list of tasks
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

}
