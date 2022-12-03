import { Component, DoCheck, OnInit } from '@angular/core';
import { ITaskList } from '../../model/itask-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<ITaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor() { }
  ngDoCheck(): void {
    this.setLocalStorage();
  }
  setLocalStorage() {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

  public setEmitTaskList(event: string) {
    this.taskList.push({ task: event, checked: false })
  }

  public deleteItemTaskList(event: number) {
    this.taskList.splice(event, 1);
  }
  public validationInput(event: string, index: number) {
    if (!event.length) {
      const confirm = window.confirm("Task vazia, deseja deletar?")
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }
  public deleteAllTaskList() {
    const confirm = window.confirm("Deseja deletar tudo?")

    if (confirm)
      this.taskList = [];
  }
}



//https://ng-girls.gitbook.io/todo-list-tutorial-portuguese/deploy_to_githubpages
