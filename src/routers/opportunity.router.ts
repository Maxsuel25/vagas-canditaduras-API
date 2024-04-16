import { Router } from "express";
import { OpportunityControllers } from "../controllers/opportunity.controllers";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { opportunityCreateSchema, opportunityUpdateSchema } from "../schemas/opportunity.schema";
import { IsOpportunityIdValid } from "../middlewares/isOpportunityIdValid.middleware";

export const opportunityRouter = Router();

const opportunityControllers = new OpportunityControllers();

opportunityRouter.use("/:id", IsOpportunityIdValid.execute);

opportunityRouter.post("/",ValidateBody.execute(opportunityCreateSchema), opportunityControllers.create);
opportunityRouter.get("/", opportunityControllers.findMany);
opportunityRouter.get("/:id", opportunityControllers.findOne);
opportunityRouter.patch("/:id",ValidateBody.execute(opportunityUpdateSchema), opportunityControllers.update);
opportunityRouter.delete("/:id", opportunityControllers.delete);
