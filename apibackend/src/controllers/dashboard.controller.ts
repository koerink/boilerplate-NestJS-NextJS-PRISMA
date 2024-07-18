import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { DashboardService } from "../services/dashboard.service";
import { Dashboard as DashboardModel } from "@prisma/client";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Dashboard")
@Controller("Dashboard")
export class DashboardController {
  constructor(private readonly DashboardService: DashboardService) {}

  @Post("dashboard")
  async createAccount(
    @Body()
    accoutData: {
      username?: string;
      email: string;
      password?: string;
      groupId?: string;
    },
  ): Promise<DashboardModel> {
    return this.DashboardService.createDashboard(accoutData);
  }

  @Get("dashboard/:id")
  async getAccountById(@Param("id") id: string): Promise<DashboardModel> {
    return this.DashboardService.getDashboard(id);
  }

  @Get("dashboard/")
  async getAccounts(): Promise<DashboardModel[]> {
    return this.DashboardService.getDashboards();
  }
}
