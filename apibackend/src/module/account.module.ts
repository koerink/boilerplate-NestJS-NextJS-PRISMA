import { Module } from "@nestjs/common";
import { AccountService } from "../services/account.service";
import { ProfileService } from "../services/profile.service";
import { PrismaService } from "../prisma.service";
import { AccountController } from "../controllers/account.controller";
import { ProfileController } from "../controllers/profile.controller";

@Module({
  controllers: [AccountController, ProfileController],
  providers: [PrismaService, AccountService, ProfileService],
})
export class AccountModule {}
