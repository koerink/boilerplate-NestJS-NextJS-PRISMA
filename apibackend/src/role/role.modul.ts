import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { roleController } from "src/role/role.controller";
import { RoleService } from "src/role/role.service";

@Module({
  controllers: [roleController],
  providers: [PrismaService, RoleService],
})
export class RoleModule {}
