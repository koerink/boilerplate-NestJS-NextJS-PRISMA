import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { jwtDto } from "src/models/jwt.dto";

const { JWT_SECRET = "" } = process.env;

export class encrypt {
  static async encryptPassword(password: string) {
    const hash = bcrypt.hashSync(password, 1);
    return hash;
  }
  static async comparePassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }

  static async generateToken(payload: jwtDto) {
    const plainPayload = JSON.parse(JSON.stringify(payload));
    const signPayload = await jwt.sign(plainPayload, JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log(signPayload);
    return signPayload;
  }
}
