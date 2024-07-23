import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { Role as RoleModel } from "@prisma/client";

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async createRole(role): Promise<RoleModel> {
    const result = await this.prisma.role.create({ data: role });
    return result;
  }

  async getRole(name: string): Promise<RoleModel> {
    return this.prisma.role.findUnique({ where: { name } });
  }

  async getRoles(): Promise<RoleModel[]> {
    return this.prisma.role.findMany();
  }
}
