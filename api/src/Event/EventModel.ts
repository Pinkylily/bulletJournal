import { PrismaClient } from "@prisma/client";
import { DataEventDbToCreate, DataEventDbToUpdate, IEventDb } from "./Event.types";
import { STATUS_ENUM } from "../common/CommonTypes.types";
import * as EventMapper from './EventMapper'

interface IEventModelDependencies {
  prismaClient: PrismaClient;
}

export class EventModel {
  private readonly prismaClient: PrismaClient;

  constructor(deps: IEventModelDependencies) {
    this.prismaClient = deps.prismaClient;
  }

  public async getEventById(id: string) {
    return await this.prismaClient.events.findUnique({ where: { id } });
  }

  public async getEventList() {
    return await this.prismaClient.events.findMany();
  }

  public async createEvent(data: DataEventDbToCreate) {
    const event = await this.prismaClient.events.create({ data });

    return EventMapper.mapEventPrismaToEventDb(event)
  }

  public async updateEvent(id: string, data: DataEventDbToUpdate): Promise<IEventDb> {
    const event = await this.prismaClient.events.update({
      where: { id },
      data,
    });

    return EventMapper.mapEventPrismaToEventDb(event)
  }

  public async deleteEvent(id: string) {
    return await this.prismaClient.events.delete({ where: { id } });
  }
}
