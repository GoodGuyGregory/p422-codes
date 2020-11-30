import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AssignmentDataService } from 'src/app/services/assignment-data.service';
import { Assignment } from '../../models/assignment';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  assignments: Observable<Assignment[]>;
  courseTitle: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentDataService,
  ) { }

  ngOnInit(): void {
    this.courseTitle = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<string> => {
        return new Observable<string>(subscriber => subscriber.next(params.get('class')));
      })
    );

    this.assignments = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Assignment[]> => {
        return this.assignmentService.getAllAssignments(params.get('class'));
      })
    );
  }

}
