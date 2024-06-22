import express, { Router } from "express";
import { TaskController } from "./TaskController";

interface ITaskRouterDependencies {
  taskController: TaskController;
}

export class TaskRouter {
  private readonly taskController: TaskController;
  public router: Router;

  constructor(deps: ITaskRouterDependencies) {
    this.taskController = deps.taskController;
    this.router = express.Router();

    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/task/:id", this.taskController.getTask);
  }
}
