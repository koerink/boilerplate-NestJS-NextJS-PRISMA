import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { RoleService } from "src/role/role.service";
import { Role as RoleModel } from "@prisma/client";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { RoleDto } from "src/models/role.dto";

@ApiTags("Role")
@Controller("role")
export class roleController {
  constructor(private readonly RoleService: RoleService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: "The record has been successfully created.",
  })
  @ApiResponse({ status: 403, description: "Forbidden." })
  @ApiResponse({ status: 500, description: "Cannot create record." })
  async createRole(
    @Body()
    RoleDto: RoleDto,
  ): Promise<RoleDto> {
    return this.RoleService.createRole(RoleDto);
  }

  @Get("/:id")
  async getRoleById(@Param("id") id: string): Promise<RoleModel> {
    return this.RoleService.getRole(id);
  }

  @Get()
  async getRoles(): Promise<RoleModel[]> {
    return this.RoleService.getRoles();
  }
}
