import express, { json } from "express";
import helmet from "helmet";
import { opportunityRouter } from "./routers/opportunity.router";
import { applicationRouter } from "./routers/application.router";

export const app = express();

app.use(helmet());
app.use(json());

app.use("/opportunities", opportunityRouter);
app.use("/opportunities", applicationRouter);
