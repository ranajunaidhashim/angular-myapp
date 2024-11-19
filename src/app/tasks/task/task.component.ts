import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type Tasks } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})

export class TaskComponent {
  private taskService = inject(TasksService)

  @Input({ required: true }) tasks!: Tasks;


  onCompleteTask() {
    console.log("hello")
this.taskService.removeTask(this.tasks.id);
    // this.complete.emit(this.tasks.id);
  }
}