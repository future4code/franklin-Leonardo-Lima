import UserDatabase from "../database/UserDatabase";
import { User, USER_ROLES } from "../model/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export default class UserBusiness {
  public signup = async (input: any) => {
    const name = input.name;
    const email = input.email;
    const password = input.password;

    if (!name || typeof name !== "string") {
      throw new Error("Parâmetro 'name' inválido");
    }

    if (!email || typeof email !== "string") {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (!email.includes("@")) {
      throw new Error("Email inválido");
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(password);

    const user = new User(id, name, email, hashPassword);

    const userDatabase = new UserDatabase();
    await userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const authenticator = new Authenticator();
    const token = authenticator.generateToken(payload);

    const response = {
      token,
    };

    return response;
  };
  async login(email: string, password: string) {
    try {
      const userDatabase = new UserDatabase();
      const user = await userDatabase.getUser(email);
      const hashManager = new HashManager();
      const hashPassword = await hashManager.compare(password, user.password);

      const authenticator = new Authenticator();

      const token = authenticator.generateToken({
        id: user.id,
        role: user.role,
      });

      return { code: 200, result: token };
    } catch (error: any) {
      return { code: 400, result: error.message };
    }
  }
  async findAll() {
    const userDatabase = new UserDatabase();
    return await userDatabase.findAll()
      .then((result) => {
        return { code: 200, result: result };
      })
      .catch((error) => {
        return { code: 400, result: error.message };
      });
  }
}
