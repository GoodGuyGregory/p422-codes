import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ProfileDisplayComponent } from './profile-display/profile-display.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileContainerComponent,
    ProfileDisplayComponent,
    ProfileEditorComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    ProfileContainerComponent
  ]
})
export class ProfileModule { }
