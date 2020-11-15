import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // adds input decorator to allow Profiles to be passed to this component 
  @Input() profile: Profile;

  poke(): void {
    this.profile.poked += 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
