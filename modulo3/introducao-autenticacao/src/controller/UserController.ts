import connection from "../config/connection";

const userTableName = "User";

export const createUser = async (
  id: string,
  email: string,
  password: string
) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into(userTableName);
};

export const getUserByEmail = async (email: string): Promise<any> => {
  const result = await connection
    .select("*")
    .from(userTableName)
    .where({ email });

  return result[0];
};

export const getUserById = async (id: string): Promise<any> => {
  const result = await connection
    .select("*")
    .from(userTableName)
    .where({ id });

  return result[0];
}
