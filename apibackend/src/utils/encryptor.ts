import * as jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import { AccountroleDto } from "src/models/accountrole.dto";

const { JWT_SECRET = "" } = process.env;

export class encrypt {
  static async encryptPassword(password: string) {
    const hash = bcrypt.hashSync(password, 1);
    return hash;
  }
  static async comparePassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }

  static async generateToken(payload: AccountroleDto) {
    delete payload.id;
    delete payload.password;
    delete payload.username;
    delete payload.profile;
    delete payload.emailVerified;
    delete payload.role.id;
    delete payload.role.name;
    delete payload.role.CreateDateColumn;
    delete payload.role.UpdateDateColumn;
    delete payload.CreateDateColumn;
    delete payload.UpdateDateColumn;
    const signPayload = await jwt.sign(payload, JWT_SECRET, {
      expiresIn: "1h",
    });
    console.log(signPayload);
    return signPayload;
  }
}
