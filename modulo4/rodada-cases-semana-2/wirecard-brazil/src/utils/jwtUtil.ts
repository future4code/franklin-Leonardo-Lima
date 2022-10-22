import jwt from 'jsonwebtoken';

export function jwtSign(payload: object) {
  return jwt.sign({ payload }, process.env.SECRET_KEY as string, {
    expiresIn: 180,
  });
}

export function jwtVerify(token: string) {
  return jwt.verify(token, process.env.SECRET_KEY as string);
}
