import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AccountService } from '../services/account.service';
import { Account as AccountModel } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { AccountDto } from 'src/dto/account.dto';

@ApiTags('Account')
@Controller('Account')
export class AccountController {
  constructor(private readonly AccountService: AccountService) {}

  @Post('account')
  async createAccount(
    @Body()
    AccountDto: AccountDto,
  ): Promise<AccountDto> {
    return this.AccountService.createAccount(AccountDto);
  }

  @Get('account/:id')
  async getAccountById(@Param('id') id: string): Promise<AccountModel> {
    return this.AccountService.getAccount(id);
  }

  @Get('account/')
  async getAccounts(): Promise<AccountModel[]> {
    return this.AccountService.getAccounts();
  }
}
