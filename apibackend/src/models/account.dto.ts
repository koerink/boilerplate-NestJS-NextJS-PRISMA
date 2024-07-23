import { ApiProperty } from "@nestjs/swagger";

export class AccountDto {
  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  profile: string[];

  @ApiProperty()
  roleId: string;

  @ApiProperty()
  readonly CreateDateColumn: Date;

  @ApiProperty()
  readonly UpdateDateColumn: Date;
}

export class AccountregisterDto {
  constructor(
    version: number,
    username: string,
    email: string,
    password: string,
    roleId: string,
  ) {
    this.version = version;
    this.username = username;
    this.email = email;
    this.password = password;
    this.roleId = roleId;
  }
  @ApiProperty()
  version: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  roleId: string;

  @ApiProperty()
  profile: string[];
}

export class RegisterDto {
  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
