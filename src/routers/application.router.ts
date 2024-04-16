import { Router } from "express";
import { ApplicationControllers } from "../controllers/application.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { applicationCreateSchema } from "../schemas/applications.schema";

export const applicationRouter = Router();
const applicationControllers = new ApplicationControllers();

applicationRouter.post("/:id/applications",ValidateBody.execute(applicationCreateSchema), applicationControllers.create);
applicationRouter.get("/:id/applications", applicationControllers.findMany);
