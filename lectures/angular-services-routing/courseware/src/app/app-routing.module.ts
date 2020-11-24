import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SyllabusComponent } from './components/syllabus/syllabus.component';

const routes: Routes = [
  { path: 'syllabus', component: SyllabusComponent },
  { path: 'assignments', component: AssignmentsComponent },
  { path: 'assignments/:name', component: AssignmentDetailComponent },
  { path: '', redirectTo: '/syllabus', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
