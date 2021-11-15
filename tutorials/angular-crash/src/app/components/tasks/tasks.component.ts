import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  addTask(task: Task) {
    // console.log(task);
    // add the new task to the array of tasks
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminderStatus(task).subscribe();
  }
}
