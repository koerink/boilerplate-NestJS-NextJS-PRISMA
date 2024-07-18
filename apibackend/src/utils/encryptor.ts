import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { AccountDto } from 'src/dto/account.dto';

const { JWT_SECRET = '' } = process.env;

export class encrypt {
  static async encryptPassword(password: string) {
    const hash = bcrypt.hashSync(password, 1);
    return hash;
  }

  static generateToken(payload: AccountDto) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
  }
}
