import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks:string[] = [];
  task = "";

  add():void{
    this.tasks.push(this.task);
  }
}
