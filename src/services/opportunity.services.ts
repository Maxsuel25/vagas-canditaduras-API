import { prisma } from "../database/prisma";
import { TOpportunity, TOpportunityCreate, opportunityUpdate} from "../schemas/opportunity.schema";

export class OpportunityServices {
  async create(body: TOpportunityCreate): Promise<TOpportunity> {
    const data = await prisma.opportunity.create({ data: body });
    
    return data;
  }

  async findMany(): Promise<TOpportunity[]> {
    const data = await prisma.opportunity.findMany();

    return data;
 }

 async findOne(id: number): Promise<TOpportunity> {
    const data = await prisma.opportunity.findFirst({ where: { id }});

    return data as TOpportunity;
 }

  async update(id:number, body: opportunityUpdate): Promise<TOpportunity>{
    const data = await prisma.opportunity.update({ where: {id}, data:body})
 
   return data;
  }
  async delete(id:number):Promise<void> {
    const data = await prisma.opportunity.delete({ where: {id}})
  }
}
