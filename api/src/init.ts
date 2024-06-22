import { PrismaClient } from "@prisma/client";
import { EventController } from "./Event/EventController";
import { EventModel } from "./Event/EventModel";
import { EventService } from "./Event/EventService";
import { EventRouter } from "./Event/EventRouter";
import { TaskModel } from "./Task/TaskModel";
import { TaskService } from "./Task/TaskService";
import { TaskController } from "./Task/TaskController";
import { TaskRouter } from "./Task/TaskRouter";

const prismaClient = new PrismaClient();

const eventDb = new EventModel({ prismaClient });
const eventService = new EventService({ eventDb });
const eventController = new EventController({ eventService });
const eventRouter = new EventRouter({ eventController });

export { eventRouter };

const taskDb = new TaskModel({ prismaClient });
const taskService = new TaskService({ taskDb });
const taskController = new TaskController({ taskService });
const taskRouter = new TaskRouter({ taskController });

export { taskRouter };
