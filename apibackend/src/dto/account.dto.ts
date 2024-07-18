import { ApiProperty } from "@nestjs/swagger";

export class AccountDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  readonly groupId: string;

  @ApiProperty()
  readonly profileId: string;

  @ApiProperty()
  readonly CreateDateColumn: Date;

  @ApiProperty()
  readonly UpdateDateColumn: Date;
}
