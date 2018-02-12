import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {routing, appRoutingProviders} from './app.routing';

import { AppComponent }  from './app.component';

import {HomeComponent} from './bk-components/home/home.bk-components';
import {ProfileComponent} from './bk-components/profile/profile.bk-components';

import {AUTH_PROVIDERS} from 'angular2-jwt';

import {AuthService} from './Services/auth.service';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ],
  
  providers: [

      appRoutingProviders,
      AUTH_PROVIDERS,
      AuthService
  ]
})
export class AppModule { }
