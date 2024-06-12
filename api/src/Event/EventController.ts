import { NextFunction, Request, Response } from "express";
import { EventService } from "./EventService";
import { DataEventToCreate, DataEventToUpdate } from "./Event.types";

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

  public getEventList = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const event = await this.eventService.getEventList();
      res.json(event);
    } catch (e) {
      next(e);
    }
  };

  public createEvent = async (
    req: Request<{ data: DataEventToCreate }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { data } = req.params;
      const event = this.eventService.createEvent(data);
      res.json(event);
    } catch (e) {
      next(e);
    }
  };

  public updateEvent = async (
    req: Request<{ id: string; data: DataEventToUpdate }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { id, data } = req.params;
      const event = await this.eventService.updateEvent(id, data);
      res.json(event);
    } catch (e) {
      next(e);
    }
  };

  public deleteEvent = async (
    req: Request<{ id: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { id } = req.params;
      await this.eventService.deleteEvent(id);
      res.send(200);
    } catch (e) {
      next(e);
    }
  };
}
