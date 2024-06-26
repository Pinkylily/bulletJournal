import { STATUS_ENUM } from "../common/CommonTypes.types";

export interface IEventDb {
  id: string;
  creatorId: string;
  title: string;
  description?: string;
  status: STATUS_ENUM;
  startAt: Date;
  endAt: Date;
}

export interface IEvent {
  id: string;
  creatorId: string;
  title: string;
  description?: string;
  status: STATUS_ENUM;
  startAt: number;
  endAt: number;
}

export interface IEventPrisma {
  id: string;
  creatorId: string;
  title: string;
  description: string | null;
  status: 'archived' | 'active';
  startAt: Date;
  endAt: Date;
  createdAt: Date;
  updateAt?: Date;
}

export type DataEventToUpdate = Omit<IEvent, "id" | "creatorId">;
export type DataEventToCreate = Omit<IEvent, "id">;

export type DataEventDbToUpdate = Omit<IEventDb, "id" | "creatorId">;
export type DataEventDbToCreate = Omit<IEventDb, "id">;
