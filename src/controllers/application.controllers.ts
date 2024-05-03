import { Request, Response } from "express";
import { ApplicationServices } from "../services/application.services";
import { container } from "tsyringe";

export class ApplicationControllers{
    async create(req: Request, res: Response){
        const applicationServices = container.resolve(ApplicationServices);

        const response = await applicationServices.create(Number(req.params.id),req.body);

        return res.status(201).json(response);
        
    }
    async findMany(req: Request, res: Response){
        const applicationServices = container.resolve(ApplicationServices);

        const response = await applicationServices.findMany(Number(req.params.id));

        return res.status(200).json(response);
    }
}