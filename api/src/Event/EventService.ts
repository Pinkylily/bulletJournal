import { EventModel } from "./EventModel";

interface IEventServiceDependencies {
  eventDb: EventModel;
}

export class EventService {
  private readonly eventDb: EventModel;

  constructor(deps: IEventServiceDependencies) {
    this.eventDb = deps.eventDb;
  }

  public async getEvent(id: string) {
    return this.eventDb.getEventById(id);
  }
}
