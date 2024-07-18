import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Account as AccountModel } from '@prisma/client';
import { AccountDto } from 'src/dto/account.dto';
import { encrypt } from 'src/utils/encryptor';

@Injectable()
export class AccountService {
  constructor(private prisma: PrismaService) {}

  async createAccount(accountDto: AccountDto) {
    const hashPassword = await encrypt.encryptPassword(accountDto.password);
    accountDto.password = hashPassword;
    const result = await this.prisma.account.create({ data: accountDto });
    return result;
  }

  async getAccount(id: string): Promise<AccountModel> {
    return this.prisma.account.findUnique({ where: { id } });
  }

  async getAccounts(): Promise<AccountModel[]> {
    return this.prisma.account.findMany();
  }
}
