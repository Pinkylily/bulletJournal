import { NextFunction, Request, Response } from "express";
import { TaskService } from "./TaskService";

interface ITaskControllerDependencies {
  taskService: TaskService;
}

export class TaskController {
  private readonly taskService: TaskService;

  constructor(deps: ITaskControllerDependencies) {
    this.taskService = deps.taskService;
  }

  public getTask = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const task = await this.taskService.getTask(id);
      res.json(task);
    } catch (e) {
      next(e);
    }
  };
}
