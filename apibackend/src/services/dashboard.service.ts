import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Dashboard as DashboardModel } from "@prisma/client";

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async createDashboard(accountData): Promise<DashboardModel> {
    const result = await this.prisma.dashboard.create({ data: accountData });
    return result;
  }

  async getDashboard(id: string): Promise<DashboardModel> {
    return this.prisma.dashboard.findUnique({ where: { id } });
  }

  async getDashboards(): Promise<DashboardModel[]> {
    return this.prisma.dashboard.findMany();
  }
}
