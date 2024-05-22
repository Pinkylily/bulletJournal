import { PrismaClient } from "@prisma/client";
import { EventController } from "./Event/EventController";
import { EventModel } from "./Event/EventModel";
import { EventService } from "./Event/EventService";
import { EventRouter } from "./Event/EventRouter";

const prismaClient = new PrismaClient();

const eventDb = new EventModel({ prismaClient });
const eventService = new EventService({ eventDb });
const eventController = new EventController({ eventService });
const eventRouter = new EventRouter({ eventController });

export { eventRouter };
