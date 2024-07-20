import { ApiProperty } from "@nestjs/swagger";

export class AccountDto {
  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  readonly profile: string[];

  @ApiProperty()
  roleId: string;

  @ApiProperty()
  readonly CreateDateColumn: Date;

  @ApiProperty()
  readonly UpdateDateColumn: Date;
}
