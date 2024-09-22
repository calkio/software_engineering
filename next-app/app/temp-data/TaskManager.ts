export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

export class TaskManager {
  tasks: Task[];

  constructor() {
    this.tasks = [
      { id: 1, title: 'Task 1', description: 'Description 1', status: 'In Progress' },
      { id: 2, title: 'Task 2', description: 'Description 2', status: 'Completed' },
      { id: 3, title: 'Task 3', description: 'Description 3', status: 'Not Started' },
    ];
  }
}
