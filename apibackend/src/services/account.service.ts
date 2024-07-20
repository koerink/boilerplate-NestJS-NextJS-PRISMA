import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Account as AccountModel } from "@prisma/client";

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async createAccount(account): Promise<AccountModel> {
    const result = await this.prisma.account.create({ data: account });
    return result;
  }

  async getAccount(id: string): Promise<AccountModel> {
    return this.prisma.account.findUnique({ where: { id } });
  }

  async getAccountByEmail(email: string): Promise<AccountModel> {
    return this.prisma.account.findUnique({
      where: { email },
      include: { role: true },
    });
  }

  async getAccounts(): Promise<AccountModel[]> {
    return this.prisma.account.findMany();
  }
}
