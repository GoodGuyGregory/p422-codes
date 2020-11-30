import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assignment } from '../models/assignment';
import { Observable } from 'rxjs';
import { Submission } from '../models/submission'

@Injectable({
  providedIn: 'root'
})
export class AssignmentDataService {

  constructor(
    private http: HttpClient
  ) { }

  private url = '/v1/assignments';

  public getAssignment(section: string, name: string): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.url}/${section}/${name}`);
  }

  public getAllAssignments(section: string): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(`${this.url}/${section}`);
  }

  public saveSubmission(section: string, name: string, submission: Submission): Observable<any> {
    return this.http.post(`${this.url}/${section}/${name}`, submission);
  }
}
