import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Assignment } from '../../models/assignment';
import { AssignmentDataService } from 'src/app/services/assignment-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable, pipe, zip } from 'rxjs';
import { Submission } from '../../models/submission';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  assignment: Observable<Assignment>;

  class: string;
  name: string;

  // Submission Status:
  status = '';
  statusError = false;

  answerControls: Observable<object[]>

  //  Builds Form for Reactive Forms:
  model = new FormGroup({
    email: new FormControl('', Validators.email),
    // creates a dynamic repetitive form
    answers: new FormArray([
      new FormControl(''),
      new FormControl(''),
      new FormControl(''),
      new FormControl(''),
      new FormControl(''),
    ])
  });

  get answers(): FormArray {
    return this.model.controls.answers as FormArray;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentDataService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    // gets the current assignment details from the server
    this.assignment = this.route.paramMap.pipe(
      switchMap((params: ParamMap): Observable<Assignment> => {
        this.class = params.get('class');
        this.name = params.get('name');
        return this.assignmentService.getAssignment(params.get('class'), params.get('name'));
      })
    );

    const answerControls: object[] = [];
    this.assignment.subscribe(a => {
      this.answerControls = new Observable<object[]>(subscriber => {
        for (const q of a.questions) {
          const control = this.fb.control('');
          answerControls.push({
            question: q,
            answer: control
          });
          this.answers.push(control);
        }
        subscriber.next(answerControls);
      })
    });
  }

  // create a submission for the question on the assignment
  public onSubmit(): void {
    // check validity of the form
    if (!this.model.valid) {
      return
    }
    console.log(JSON.stringify(this.model.value, null, 2));

    // creates a submission 
    const submission = new Submission(
      this.class,
      this.name,
      this.model.value.email,
      this.model.value.answers,
    );

    // adds the submission to the class assignments
    this.assignmentService.saveSubmission(this.class, this.name, submission).subscribe(
      next => {
        this.status = 'Saved!';
        this.statusError = false;
      },
      err => {
        this.status = err;
        this.statusError = true;
      }

    )

  }


}
