import { Controller, Post, Body, Get, Param, UseGuards } from "@nestjs/common";
import { AccountService } from "./account.service";
import { RoleService } from "src/role/role.service";
import { encrypt } from "../utils/encryptor";
import { Account as AccountModel } from "@prisma/client";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AccountDto } from "src/models/account.dto";
import { LoginDto } from "src/models/login.dto";
import { AuthGuard } from "src/guard/auth.guard";

@ApiTags("Account")
@Controller("account")
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly roleService: RoleService,
  ) {}

  @Post("login")
  @ApiResponse({
    status: 200,
    description: "OK",
  })
  async login(@Body() loginDto: LoginDto) {
    const account = await this.accountService.login(loginDto.email);
    const passwordMatch = await encrypt.comparePassword(
      loginDto.password,
      account.password,
    );
    if (account) {
      if (passwordMatch) {
        const token = await encrypt.generateToken(account);
        return { token };
      }
    }

    return { message: "Invalid email or password" };
  }

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

  @UseGuards(AuthGuard)
  @Get("/:id")
  async getAccountById(@Param("id") id: string): Promise<AccountModel> {
    return this.accountService.getAccount(id);
  }

  @UseGuards(AuthGuard)
  @Get()
  async getAccounts(): Promise<AccountModel[]> {
    return this.accountService.getAccounts();
  }
}
