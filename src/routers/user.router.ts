import { Router } from "express";
import { container } from "tsyringe";
import { UserServices } from "../services/user.services";
import { UserControllers } from "../controllers/user.controller";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { userLoginBodySchema, userRegisterBodySchema } from "../schemas/user.schemas";
import { ValidateToken } from "../middlewares/validateToken.middleware";

export const userRouter = Router();

container.registerSingleton("UserServices",UserServices);
const userController = container.resolve(UserControllers);


userRouter.post("/",ValidateBody.execute(userRegisterBodySchema), (req, res) => userController.register(req, res));
userRouter.post("/login",ValidateBody.execute(userLoginBodySchema), (req, res) => userController.login(req, res));
userRouter.get("/",ValidateToken.execute, (req, res) => userController.getUser(req, res));