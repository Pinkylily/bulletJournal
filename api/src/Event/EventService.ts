import { DataEventToCreate, DataEventToUpdate } from "./Event.types";
import * as EventMapper from "./EventMapper";
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
    return this.eventDb.createEvent(EventMapper.mapEventCreateToEventCreateDb(data));
  }

  public async updateEvent(id: string, data: DataEventToUpdate) {
    const event = await this.eventDb.updateEvent(id, EventMapper.mapEventCreateToEventUpdateDb(data));
    return EventMapper.mapEventDbToEvent(event)
  }

  public async deleteEvent(id: string) {
    return this.eventDb.deleteEvent(id);
  }
}
