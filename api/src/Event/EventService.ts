import { DataEventToCreate, DataEventToUpdate } from "./Event.types";
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

  public async getEventList() {
    return this.eventDb.getEventList();
  }

  public async createEvent(data: DataEventToCreate) {
    return this.eventDb.createEvent(data);
  }

  public async updateEvent(id: string, data: DataEventToUpdate) {
    return this.eventDb.updateEvent(id, data);
  }

  public async deleteEvent(id: string) {
    return this.eventDb.deleteEvent(id);
  }
}
