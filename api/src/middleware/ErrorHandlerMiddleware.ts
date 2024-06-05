import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const errorHandlerMiddleware: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(`error ${err.message}`);
  const status = err.status || 500;
  res.status(status).send(err.message);
};
