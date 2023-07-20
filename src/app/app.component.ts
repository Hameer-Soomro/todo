import { Component } from '@angular/core';
import { TodoItem } from './TodoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';
  private list = new TodoList("Bob", [
    new TodoItem("Go for run", true),
    new TodoItem("Get flowers"),
    new TodoItem("Collect Tickets"),
  ]);

  showComplete: boolean = false;

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number{
    return this.list.items.filter(item => !item.complete).length;
  }

  get items() : readonly TodoItem[]{
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  get completedItems() : readonly TodoItem[]{
    return this.list.items.filter(item => item.complete);
  }

  addItem(newitem:string){
    if(newitem != ""){
      this.list.addItem(newitem);
    }
  }
}
