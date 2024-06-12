import { STATUS_ENUM } from "../common/CommonTypes.types";

export interface IEventDb {
  id: string;
  creatorId: string;
  title: string;
  description: string;
  status: STATUS_ENUM;
  startAt: Date;
  endAt: Date;
}

export interface IEvent {
  id: string;
  creatorId: string;
  title: string;
  description: string;
  status: STATUS_ENUM;
  startAt: Date;
  endAt: Date;
}

export type DataEventToUpdate = Omit<IEvent, "id" | "creatorId">;
export type DataEventToCreate = Omit<IEvent, "id">;
