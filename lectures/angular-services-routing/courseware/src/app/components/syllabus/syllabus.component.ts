import { Component, Input, OnInit } from '@angular/core';
import { Course, SyllabusDataService } from 'src/app/services/syllabus-data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-syllabus',
  templateUrl: './syllabus.component.html',
  styleUrls: ['./syllabus.component.css']
})
export class SyllabusComponent implements OnInit {
  selectedCourseName: string;
  selectedCourse: Observable<Course>;

  // injects service into the constructor
  constructor(
    private syllabusDataService: SyllabusDataService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    // set selected course from params 
    this.selectedCourse = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Course> => {
        return this.syllabusDataService.getCourse(params.get('class'));
      })
    );
  }

  public selectCourse(name: string): void {
    // asks request for the course from the function
    this.selectedCourse = this.syllabusDataService.getCourse(name);
    if (!this.selectedCourse) {
      this.router.navigateByUrl('/notfound')
    }
  }

  public goBack(): void {
    this.location.back();
  }
}
