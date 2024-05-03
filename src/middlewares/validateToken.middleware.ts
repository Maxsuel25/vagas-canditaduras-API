import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appErros";
import jwt from "jsonwebtoken";
export class ValidateToken {
  static execute(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(403, "token in requered");
    }

    jwt.verify(token, process.env.JWT_SECRET as string);
    
    res.locals.decode = jwt.decode(token)
    next();
  }
}
