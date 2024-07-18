import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Group as GroupModel } from '@prisma/client';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async createGroup(accountData): Promise<GroupModel> {
    const result = await this.prisma.group.create({ data: accountData });
    return result;
  }

  async getGroup(id: string): Promise<GroupModel> {
    return this.prisma.group.findUnique({ where: { id } });
  }

  async getGroups(): Promise<GroupModel[]> {
    return this.prisma.group.findMany();
  }
}
