import { Router } from "express";
import { ApplicationControllers } from "../controllers/application.controllers";

export const applicationRouter = Router();
const applicationControllers = new ApplicationControllers();

applicationRouter.post("/:id/applications", applicationControllers.create);
applicationRouter.get("/:id/applications", applicationControllers.findMany);
