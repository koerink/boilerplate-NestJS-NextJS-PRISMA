import { Module } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { roleController } from "src/controllers/role.controller";
import { RoleService } from "src/services/role.service";

@Module({
  controllers: [roleController],
  providers: [PrismaService, RoleService],
})
export class RoleModule {}
