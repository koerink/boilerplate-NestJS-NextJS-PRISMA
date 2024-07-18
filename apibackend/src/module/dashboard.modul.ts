import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { DashboardController } from 'src/controllers/dashboard.controller';
import { DashboardService } from 'src/services/dashboard.service';

@Module({
  controllers: [DashboardController],
  providers: [PrismaService, DashboardService],
})
export class DashboardModul {}
