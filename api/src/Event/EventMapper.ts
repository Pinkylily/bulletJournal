import { STATUS_ENUM } from "../common/CommonTypes.types";
import { DataEventDbToCreate, DataEventDbToUpdate, DataEventToCreate, DataEventToUpdate, IEvent, IEventDb, IEventPrisma } from "./Event.types";

export const mapEventCreateToEventCreateDb = (event: DataEventToCreate): DataEventDbToCreate => ({
    ...event,
    startAt: new Date(event.startAt),
    endAt: new Date(event.endAt),
})

export const mapEventCreateToEventUpdateDb = (event: DataEventToUpdate): DataEventDbToUpdate => ({
    ...event,
    startAt: new Date(event.startAt),
    endAt: new Date(event.endAt),
})

export const mapEventDbToEvent = (event: IEventDb): IEvent => ({
    ...event,
    startAt: event.startAt.getTime(),
    endAt: event.endAt.getTime(),
})

export const mapEventPrismaToEventDb = (event: IEventPrisma): IEventDb => ({
    id: event.id,
    creatorId: event.creatorId,
    description: event.description ?? undefined,
    endAt: event.endAt,
    startAt: event.startAt,
    title: event.title,
    status: STATUS_ENUM[event.status]
})