import { Component } from '@angular/core';
import {AuthService} from './Services/auth.service';

@Component({
  moduleId: module.id ,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent  {

  constructor(private auth:AuthService){

  }
}
