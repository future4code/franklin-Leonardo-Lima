import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";

type userLogin = {
  email: string;
  password: string;
};

export default class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const input: any = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const service = new UserBusiness();
      const response = await service.signup(input);

      res.status(201).send(response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(400).send({ message: error.message });
      }

      res.status(500).send({ message: "Erro inesperado" });
    }
  };

  async login(request: Request, response: Response) {
    const { email, password } = request.body as unknown as userLogin;
    const service = new UserBusiness();
    const { code, result } = await service.login(email, password);

    response.status(code).json(result);
  }
  async findAll(request: Request, response: Response) {

    const service = new UserBusiness();
    const { code, result } = await service.findAll();

    response.status(code).json(result);
  }
}
