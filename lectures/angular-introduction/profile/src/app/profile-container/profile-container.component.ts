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

  onSelect(profile: Profile): void {
    if (this.selectedProfile && this.selectedProfile.name === profile.name) {
      // sets the profile name to null which causes the boolean to not be true
      this.selectedProfile = null;
      return;
    }
    this.selectedProfile = profile;
    console.log(`Selected Profile: ${this.selectedProfile.name}`);
  }

}
