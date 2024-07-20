import { ApiProperty } from "@nestjs/swagger";

export class RoleDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  role: string[];

  @ApiProperty()
  readonly CreateDateColumn: Date;

  @ApiProperty()
  readonly UpdateDateColumn: Date;
}
