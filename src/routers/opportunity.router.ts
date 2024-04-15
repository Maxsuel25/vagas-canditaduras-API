import { Router } from "express";
import { OpportunityControllers } from "../controllers/opportunity.controllers";

export const opportunityRouter = Router();

const opportunityControllers = new OpportunityControllers();

opportunityRouter.post("/", opportunityControllers.create);
opportunityRouter.get("/", opportunityControllers.findMany);
opportunityRouter.get("/:id", opportunityControllers.findOne);
opportunityRouter.patch("/:id", opportunityControllers.update);
opportunityRouter.delete("/:id", opportunityControllers.delete);
