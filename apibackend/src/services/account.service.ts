import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/services/prisma.service";
import { Account as AccountModel } from "@prisma/client";
import { AccountroleDto } from "src/models/accountrole.dto";

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async login(email: string): Promise<AccountroleDto> {
    const result = await this.prisma.account.findUnique({
      where: { email },
      include: { role: true },
    });
    return result;
  }

  async createAccount(account): Promise<AccountModel> {
    const result = await this.prisma.account.create({ data: account });
    return result;
  }

  async getAccount(id: string): Promise<AccountModel> {
    return this.prisma.account.findUnique({ where: { id } });
  }

  async getAccounts(): Promise<AccountModel[]> {
    return this.prisma.account.findMany();
  }
}
