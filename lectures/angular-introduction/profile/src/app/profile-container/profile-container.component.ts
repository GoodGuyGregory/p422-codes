import { Component, OnInit } from '@angular/core';

// import all the profile data into the component:
import { PROFILES } from '../data/profiles';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.scss']
})
export class ProfileContainerComponent implements OnInit {
  profiles = PROFILES;
  selectedProfile: Profile;

  constructor() { }

  ngOnInit(): void {
  }

}
