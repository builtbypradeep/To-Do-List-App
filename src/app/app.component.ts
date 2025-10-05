import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TO-DO LIST';

  task: string = '';

  count = 0;

  taskList: { id: number; task: string }[] = [];

  addTask(value: string) {
    if (this.task != '') {
      const index = (this.count += 1);
      this.taskList.push({ id: index, task: this.task });
    }
    else{
      alert("Task can't be empty");
    }

    this.task = '';
  }

  DeleteTask(id: number) {
    this.taskList = this.taskList.filter((task) => task.id != id);
    
  }
}
