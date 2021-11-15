import { Injectable } from '@angular/core';
import { Observable, Subject, } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  // function to toggle the add tasks component
  toggleAddTask(): void {
    console.log("fires toggleAddTask method");
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }

}
