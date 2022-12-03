import { Component, OnInit } from '@angular/core';
import { ITaskList } from '../../model/itask-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<ITaskList> =
    [
      { task: "Nova", checked: true },
      { task: "Nova_2", checked: false }
    ];

  constructor() {

  }
  ngOnInit(): void {
  }
}
