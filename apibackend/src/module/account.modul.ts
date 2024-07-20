import { Module } from "@nestjs/common";
import { AccountService } from "../services/account.service";
import { PrismaService } from "../prisma.service";
import { AccountController } from "../controllers/account.controller";
import { RoleService } from "src/services/role.service";

@Module({
  controllers: [AccountController],
  providers: [PrismaService, AccountService, RoleService],
})
export class AccountModule {}
