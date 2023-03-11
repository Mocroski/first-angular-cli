import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasks';
  upperText:string = 'Display uppercase';
  user: User = {
    name: 'bob',
    age: 25
  }

}
