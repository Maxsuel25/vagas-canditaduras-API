import { Router } from "express";
import { OpportunityControllers } from "../controllers/opportunity.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { opportunityCreateSchema, opportunityUpdateSchema } from "../schemas/opportunity.schema";
import { IsOpportunityIdValid } from "../middlewares/isOpportunityIdValid.middleware";
import { container } from "tsyringe";
import { OpportunityServices } from "../services/opportunity.services";

export const opportunityRouter = Router();

container.registerSingleton("OpportunityServices",OpportunityServices);
const opportunityControllers = container.resolve(OpportunityControllers);

opportunityRouter.use("/:id", IsOpportunityIdValid.execute);

opportunityRouter.post("/",ValidateBody.execute(opportunityCreateSchema), (req, res) => opportunityControllers.create(req, res));
opportunityRouter.get("/", (req, res) => opportunityControllers.findMany(req, res));
opportunityRouter.get("/:id", (req, res) => opportunityControllers.findOne(req, res));
opportunityRouter.patch("/:id",ValidateBody.execute(opportunityUpdateSchema), (req, res) => opportunityControllers.update(req, res));
opportunityRouter.delete("/:id", (req, res) => opportunityControllers.delete(req, res));
