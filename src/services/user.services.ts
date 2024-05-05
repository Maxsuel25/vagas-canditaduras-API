import { injectable } from "tsyringe";
import { TUserLoginBody, TUserRegisterBody, TUserReturn, TUserReturnLogin, userReturnSchema } from "../schemas/user.schemas";
import bcrypt from "bcrypt";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appErros";
import jwt from "jsonwebtoken";

@injectable()
export class UserServices {

  async register(body: TUserRegisterBody):Promise<TUserReturn> {
    const hasPassword = await bcrypt.hash(body.password, 10);

    const newBody = {
      ...body,
      password: hasPassword,
    };

    const user = prisma.user.create({ data: newBody });

    return userReturnSchema.parse(user);
  }

  async login(body: TUserLoginBody):Promise<TUserReturnLogin> {
    const user = await prisma.user.findFirst({ where: { email: body.email }});

    if(!user){
      throw new AppError(404, "User not register");
    }

    const compare = bcrypt.compare(body.password, user.password);

    if(!compare){
      throw new AppError(403,"Email and password doesn't match");
    }
    
    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET as string)
    
    const data =  {
        accesToken: token, 
        user: userReturnSchema.parse(user)
    };
    return data 
  }

  async getUser(id: number):Promise<TUserReturn> {
      const user = await prisma.user.findFirst({where:{id}});

    return userReturnSchema.parse(user);
  }
}
