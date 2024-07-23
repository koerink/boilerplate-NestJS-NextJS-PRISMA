import { Controller, Post, Body, Get, Param, UseGuards } from "@nestjs/common";
import { AccountService } from "src/services/account.service";
import { RoleService } from "src/services/role.service";
import { encrypt } from "../utils/encryptor";
import { Account as AccountModel } from "@prisma/client";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { AccountregisterDto, RegisterDto } from "src/models/account.dto";
import { jwtDto } from "src/models/jwt.dto";
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
    if (!account) {
      return { message: "Invalid Credential" };
    }
    const passwordMatch = await encrypt.comparePassword(
      loginDto.password,
      account.password,
    );
    if (!passwordMatch) {
      return { message: "Invalid Credential" };
    }

    const jwt = new jwtDto(
      account.version,
      account.email,
      account.roleId,
      account.role.version,
      account.role.name,
      account.role.role,
    );
    const token = await encrypt.generateToken(jwt);
    return { token };
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
    registerDto: RegisterDto,
  ) {
    const role = await this.roleService.getRole("DEFAULT");
    registerDto.password = await encrypt.encryptPassword(registerDto.password);
    const accountRegister = new AccountregisterDto(
      1,
      registerDto.username,
      registerDto.email,
      registerDto.password,
      role.id,
    );
    accountRegister.version = 1;

    accountRegister.roleId = role.id;
    accountRegister.profile = ["thisBio", "thisUrl"];
    const returnValue =
      await this.accountService.createAccount(accountRegister);

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
