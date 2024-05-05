import "reflect-metadata";
import "express-async-errors";
import "dotenv/config";
import express, { json } from "express";
import helmet from "helmet";
import { opportunityRouter } from "./routers/opportunity.router";
import { applicationRouter } from "./routers/application.router";
import { HandleErros } from "./middlewares/handleErros.middlewares";
import { userRouter } from "./routers/user.router";

export const app = express();

app.use(helmet());
app.use(json());

app.use("/opportunities", opportunityRouter);
app.use("/opportunities", applicationRouter);
app.use("/user", userRouter);

app.use(HandleErros.execute);
