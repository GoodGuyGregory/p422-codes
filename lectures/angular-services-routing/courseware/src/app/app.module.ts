import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SyllabusComponent } from './components/syllabus/syllabus.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { AssignmentDetailComponent } from './components/assignment-detail/assignment-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SyllabusComponent,
    AssignmentsComponent,
    AssignmentDetailComponent,
    PageNotFoundComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
