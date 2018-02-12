import { Component } from '@angular/core';
import {AuthService} from '../../Services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.bk-components.html',
})
export class HomeComponent  {

    constructor(private Auth:AuthService){
  
    }
  }