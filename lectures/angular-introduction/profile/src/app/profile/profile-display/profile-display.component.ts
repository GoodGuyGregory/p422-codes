import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.scss']
})
export class ProfileDisplayComponent implements OnInit {

  // adds input decorator to allow Profiles to be passed to this component 
  @Input() profile: Profile;

  poke(): void {
    this.profile.poked += 1;
  }

  edit(): void {

  }
  constructor() { }

  ngOnInit(): void {
  }

}