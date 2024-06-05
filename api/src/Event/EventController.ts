import { NextFunction, Request, Response } from "express";
import { EventService } from "./EventService";

interface IEventControllerDependencies {
  eventService: EventService;
}

export class EventController {
  private readonly eventService: EventService;

  constructor(deps: IEventControllerDependencies) {
    this.eventService = deps.eventService;
  }

  public getEvent = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const event = await this.eventService.getEvent(id);
      res.json(event);
    } catch (e) {
      next(e);
    }
  };
}
