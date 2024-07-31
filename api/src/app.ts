import express from "express";
import { eventRouter } from "./init";
import { errorHandlerMiddleware } from "./middleware/ErrorHandlerMiddleware";

const app = express();

const port = 3000; // Use port 3000 by default if not specified

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world !");
});

app.use("/", eventRouter.router);

app.use(errorHandlerMiddleware);

// creates and starts a server for our API on a defined port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
