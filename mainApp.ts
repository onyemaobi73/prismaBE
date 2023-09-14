import express, { Application, Request, Response } from "express";
import cors from "cors";
import auth from "./router/authRouter";
import comment from "./router/commentRouter";
import store from "./router/storeRouter";
import morgan from "morgan";
import helmet from "helmet";

export const mainApp = (app: Application) => {
  app.use(cors());

    app.use(morgan("dev"));
    app.use(helmet());

  app.use(express.json());
  app.set("view engine", "ejs");

  app.use("/api", auth);
  app.use("/api", comment);
  app.use("/api", store);

  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({ message: "This is the Test..." });
    } catch (error) {
      return res.status(404).json({ message: "Error" });
    }
  });
};
