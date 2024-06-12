import { PrismaClient } from "@prisma/client";
import { IEventDb } from "./Event.types";

interface IEventModelDependencies {
  prismaClient: PrismaClient;
}

type DataEventToUpdate = Omit<IEventDb, "id" | "creatorId">;
type DataEventToCreate = Omit<IEventDb, "id">;

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

  public async createEvent(data: DataEventToCreate) {
    return await this.prismaClient.events.create({ data });
  }

  public async updateEvent(id: string, data: DataEventToUpdate) {
    return await this.prismaClient.events.update({
      where: { id },
      data,
    });
  }

  public async deleteEvent(id: string) {
    return await this.prismaClient.events.delete({ where: { id } });
  }
}
