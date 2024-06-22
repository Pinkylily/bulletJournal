import { TaskModel } from "./TaskModel";

interface ITaskServiceDependencies {
  taskDb: TaskModel;
}

export class TaskService {
  private readonly taskDb: TaskModel;

  constructor(deps: ITaskServiceDependencies) {
    this.taskDb = deps.taskDb;
  }

  public async getTask(id: string) {
    return this.taskDb.getTaskById(id);
  }
}
