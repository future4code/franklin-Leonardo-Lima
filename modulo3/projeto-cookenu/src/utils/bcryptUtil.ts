import bcrypt from 'bcryptjs';

export function bcryptHash(stringToHash: string) {
  return bcrypt.hash(stringToHash, parseInt(process.env.BCRYPT_SALT as string));
}

export function bcryptCompare(dataToCompare: string, hash: string) {
  return bcrypt.compare(dataToCompare, hash);
}
