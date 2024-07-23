import { Module } from "@nestjs/common";
import { AccountService } from "src/services/account.service";
import { PrismaService } from "src/services/prisma.service";
import { AccountController } from "src/controllers/account.controller";
import { RoleService } from "src/services/role.service";
import { AuthGuard } from "src/guard/auth.guard";
import { JwtModule } from "@nestjs/jwt";
import { env } from "process";

@Module({
  controllers: [AccountController],
  providers: [PrismaService, AccountService, RoleService, AuthGuard],
  imports: [
    JwtModule.register({
      global: true,
      secret: env.JWT_SECRET,
      signOptions: { expiresIn: "1h" },
    }),
  ],
})
export class AccountModule {}
