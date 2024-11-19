import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
// import { type NewTask } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) myName!: string;
  @Input({ required: true }) uid!: string;
  isNewTask: boolean = false;
  // private tasksService: TasksService;

  constructor(private tasksService: TasksService) {
    this.tasksService = tasksService;
  }

  get selecteduserTask() {
    return this.tasksService.getUserTasks(this.uid);
  }

  onCompleteTask(id: string) {
   this.tasksService.removeTask(this.uid);
    console.log('task removed:' + id);
  }

  onNewAddTask() {
    // this.tasksService.removeTask(this.uid);
    this.isNewTask = true;
  }

  closeOnAddTask() {
    this.isNewTask = false;
  }
}
