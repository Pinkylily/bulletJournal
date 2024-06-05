import express, { Router } from "express";
import { EventController } from "./EventController";

interface IEventRouterDependencies {
  eventController: EventController;
}

export class EventRouter {
  private readonly eventController: EventController;
  public router: Router;

  constructor(deps: IEventRouterDependencies) {
    this.eventController = deps.eventController;
    this.router = express.Router();

    this.initRoutes();
  }

  private initRoutes() {
    this.router.get("/event/:id", this.eventController.getEvent);
  }
}
