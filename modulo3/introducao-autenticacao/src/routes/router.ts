import { Request, Response } from "express";
import { createUser, getUserByEmail, getUserById } from "../controller/UserController";
import { user } from "../types/types";
import { generateId } from "../utils/generateId";
import { generateToken, getData } from "../utils/jwt";
import { Router } from "express";

const router = Router()

router.post("/user/signup", async (req: Request, res: Response) => {
  const body = req.body as unknown as user;

  try {
    // Item b. Validação do email
    if (!body.email || body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    // Item c. Validação da senha
    if (!body.password || body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: body.email,
      password: body.password,
    };

    const id = generateId();

    await createUser(id, userData.email, userData.password);

    const token = generateToken({
      id,
    });

    res.status(200).send({
      token,
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

router.post("/user/login", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };


    const user = await getUserByEmail(userData.email);

    if (user.password !== userData.password) {
      throw new Error("Invalid password");
    }

    
    const token = generateToken({
      id: user.id,
    });

    res.status(200).send({
      token,
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

router.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

   
    const authenticationData = getData(token);

    const user = await getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

export default router;
