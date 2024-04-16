import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appErros";

export class IsOpportunityIdValid {
   static async execute(req: Request, res: Response, next: NextFunction) {
      const id = req.params.id;

      const opportunity = await prisma.opportunity.findFirst({
         where: { id: Number(id) },
      });

      if(!opportunity){
        throw new AppError(404, "Opportunity not found");
      }

      res.locals.opportunity = opportunity;

      next();
   }
}