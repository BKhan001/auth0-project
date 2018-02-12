import { Component } from '@angular/core';
import {AuthService} from '../../Services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.bk-components.html',
})
export class ProfileComponent {

  profile: any;
  constructor(private auth:AuthService){
    //this.profile = JSON.parse(localStorage.getItem('profile'));
    //console.log(this.profile);

    var profile_text = localStorage.getItem('profile');
    if (profile_text) {
      this.profile = JSON.parse(profile_text);
    }
  }
}