import "express-async-errors"
import express, { json } from "express";
import helmet from "helmet";
import { opportunityRouter } from "./routers/opportunity.router";
import { applicationRouter } from "./routers/application.router";
import { HandleErros } from "./middlewares/handleErros.middlewares";

export const app = express();

app.use(helmet());
app.use(json());

app.use("/opportunities", opportunityRouter);
app.use("/opportunities", applicationRouter);

app.use(HandleErros.execute)