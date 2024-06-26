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
    this.router.get("/events", this.eventController.getEventList);
    this.router.post("/event", this.eventController.createEvent);
    this.router.put("/event", this.eventController.updateEvent);
    this.router.delete("/event", this.eventController.deleteEvent);
  }
}
