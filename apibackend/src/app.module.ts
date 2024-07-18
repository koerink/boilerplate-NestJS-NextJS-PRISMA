import { Module } from '@nestjs/common';
import { AccountService } from './services/account.service';
import { ProfileService } from './services/profile.service';
import { PrismaService } from './prisma.service';
import { AccountController } from './controllers/account.controller';
import { ProfileController } from './controllers/profile.controller';
import { GroupController } from './controllers/group.controller';
import { GroupService } from './services/group.service';
import { DashboardController } from './controllers/dashboard.controller';
import { DashboardService } from './services/dashboard.service';

@Module({
  controllers: [
    AccountController,
    ProfileController,
    GroupController,
    DashboardController,
  ],
  providers: [
    PrismaService,
    AccountService,
    ProfileService,
    GroupService,
    DashboardService,
  ],
})
export class AppModule {}
