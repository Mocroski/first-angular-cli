import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tasks';
  tasks:string[] = [];
  task = "";

  add():void{
    this.tasks.push(this.task);
  }
}
