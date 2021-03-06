import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Profile } from 'src/app/models/profile';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {

  @Input() profile: Profile;
  @Output() finishedEditing = new EventEmitter<boolean>();

  // sets up form controls in angular
  person = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(13), Validators.max(120)]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor() { }

  ngOnInit(): void {
    this.reset();
  }

  save(): void {
    // Checks Validity of Validators
    if (this.person.valid) {
      this.profile.name = this.person.value.name;
      this.profile.age = this.person.value.age;
      this.profile.phone = this.person.value.phone;
      this.profile.address = this.person.value.address;
      this.profile.email = this.person.value.email;
    }


    // sends an output to other components
    this.finishedEditing.emit(true);
  }

  reset() {
    this.person.reset({
      name: this.profile.name,
      age: this.profile.age,
      phone: this.profile.phone,
      address: this.profile.address,
      email: this.profile.email,
    })
  }

  cancel(): void {
    this.reset();
    this.finishedEditing.emit(true);
  }
}
