import { Component, Input, OnInit } from '@angular/core';
import { Course, SyllabusDataService } from 'src/app/services/syllabus-data.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {
  selectedCourseName: string;
  selectedCourse: Observable<Course>;

  // injects service into the constructor
  constructor(private syllabusDataService: SyllabusDataService, private router: Router) {

  }

  ngOnInit(): void {
    this.selectCourse('P422');
  }

  public selectCourse(name: string): void {
    // asks request for the course from the function
    this.selectedCourse = this.syllabusDataService.getCourse(name);
    if (!this.selectedCourse) {
      this.router.navigateByUrl('/notfound')
    }
  }

}
