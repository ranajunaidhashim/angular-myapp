import { Injectable } from '@angular/core';
import { type NewTask } from './new-task/new-task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private dummyTasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const task = localStorage.getItem('dummyTask');

    if (task) {
      this.dummyTasks = JSON.parse(task);
    }
  }

  getUserTasks(uid: string) {
    return this.dummyTasks.filter((t) => t.userId === uid);
    this.saveTask();
  }

  addTask(taskdata: NewTask, uid: string) {
    this.dummyTasks.unshift({
      id: new Date().getTime().toString(),
      summary: taskdata.summary,
      title: taskdata.title,
      dueDate: taskdata.date,
      userId: uid,
    });
    this.saveTask();
  }

  removeTask(id: string) {
    this.dummyTasks = this.dummyTasks.filter((t) => t.id !== id);
    console.log('removed' + id);
    this.saveTask();
  }

  private saveTask() {
    localStorage.setItem('task', JSON.stringify(this.dummyTasks));
  }
}
