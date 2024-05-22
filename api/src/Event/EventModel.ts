import { PrismaClient, Prisma } from "@prisma/client";

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
}
