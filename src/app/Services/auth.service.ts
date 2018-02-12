import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router, NavigationStart } from '@angular/router';
import 'rxjs/add/operator/filter';
import Auth0Lock from 'auth0-lock';
import { tokenNotExpired } from 'angular2-jwt';

//import { myConfig } from './auth.config';

// Avoid name not found warnings
// declare var Auth0Lock: any;
//let Auth0Lock = require('auth0-lock').default;

@Injectable()
export class AuthService {
  // Configure Auth0
  lock = new Auth0Lock('kvacakoytSmKEgga0gasd2piydw241eK', 'bksampleapp2.auth0.com', {});

/*
  lock = new Auth0Lock('kvacakoytSmKEgga0gasd2piydw241eK', 'bksampleapp2.auth0.com', {
    auth: {
      redirectUrl: 'http://localhost:4200',
      responseType: 'code',
      params: {
        scope: 'openid email' // Learn about scopes: https://auth0.com/docs/scopes
      }
    }
  });
*/


  profile: any;
  //onProfileUpdated: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    // Auth Lock Pop Up Registration
    // Add callback for lock `authenticated` event
    this.lock.on("authenticated", (authResult: any) => {
      this.lock.getProfile(authResult.accessToken, (error: any, profile: any) => {
        if (error) {
          throw new Error(error);
        }
        localStorage.setItem('id_token', authResult.accessToken);
        localStorage.setItem('profile', JSON.stringify(profile)); // We will wrap the profile into a JSON object as In local Storage you can only store strings
        console.log('Set \'id token\' to Local Storage');
        console.log('Set \'profile\' to Local Storage');
        console.log('PROFILE INFORMATION: ' + profile);

        //this.onProfileUpdated.emit(profile);
      });
    });
  }

  public login() {
    // Call the show method to display the widget.
    var options = {
      additionalSignUpFields: [
      {
        name: "full_name",
        placeholder: "Enter your full name"
      }],
        loginAfterSignUp: false
      
    }

    
    this.lock.show(options);
    
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    //return tokenNotExpired();
    if (localStorage.getItem("accessToken") == null) 
      return false;
    else 
      return true;
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('profile');
    //this.onProfileUpdated.emit(null); // HUNG
  };
}