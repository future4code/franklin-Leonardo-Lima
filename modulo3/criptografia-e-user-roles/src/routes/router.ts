import { Request, Response } from "express";
import { Router } from "express";
import UserController from "../controller/UserController";
import { getData } from "../utils/jwt";

const router = Router()

const userController = new UserController();

router.post("/user/signup", userController.createUser);

router.post("/user/login", userController.getUserBYEmail);

router.get("/user/profile", userController.getUserById);

export default router;
