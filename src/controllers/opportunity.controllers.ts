import { Request, Response } from "express";
import { OpportunityServices } from "../services/opportunity.services";

export class OpportunityControllers {
  
  private opportunityServices = new OpportunityServices();

  async create(req: Request, res: Response) {
    const response = await this.opportunityServices.create(req.body);

    return res.status(201).json(response);
  }

  findMany(req: Request, res: Response) {}

  findOne(req: Request, res: Response) {}

  update(req: Request, res: Response) {}

  delete(req: Request, res: Response) {}
}
