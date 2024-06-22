import { PrismaClient, Prisma } from "@prisma/client";

interface ITaskModelDependencies {
  prismaClient: PrismaClient;
}

export class TaskModel {
  private readonly prismaClient: PrismaClient;

  constructor(deps: ITaskModelDependencies) {
    this.prismaClient = deps.prismaClient;
  }

  public async getTaskById(id: string) {
    return await this.prismaClient.tasks.findUnique({ where: { id } });
  }
}
