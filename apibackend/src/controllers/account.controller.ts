import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { AccountService } from "../services/account.service";
import { RoleService } from "src/services/role.service";
import { encrypt } from "../utils/encryptor";
import { Account as AccountModel } from "@prisma/client";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AccountDto } from "src/models/account.dto";

@ApiTags("Account")
@Controller("account")
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly roleService: RoleService,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: "The record has been successfully created.",
  })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 500, description: "Cannot create record." })
  async createAccount(
    @Body()
    accountDto: AccountDto,
  ): Promise<AccountDto> {
    accountDto.password = await encrypt.encryptPassword(accountDto.password);
    const role = await this.roleService.getRole("DEFAULT");
    accountDto.roleId = role.id;
    const returnValue = await this.accountService.createAccount(accountDto);

    delete returnValue.password;
    return returnValue;
  }

  @Get("/:id")
  async getAccountById(@Param("id") id: string): Promise<AccountModel> {
    return this.accountService.getAccount(id);
  }

  @Get("email/:email")
  async getAccountByEmail(
    @Param("email") email: string,
  ): Promise<AccountModel> {
    return this.accountService.getAccountByEmail(email);
  }

  @Get()
  async getAccounts(): Promise<AccountModel[]> {
    return this.accountService.getAccounts();
  }
}
