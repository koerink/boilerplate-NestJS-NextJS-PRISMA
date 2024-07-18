import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { GroupService } from "../services/group.service";
import { Group as GroupModel } from "@prisma/client";

@Controller("Group")
export class GroupController {
  constructor(private readonly GroupService: GroupService) {}

  @Post("profile")
  async createProfile(
    @Body()
    profileData: {
      profileData?: string;
      email: string;
      password?: string;
      groupId?: string;
    },
  ): Promise<GroupModel> {
    return this.GroupService.createGroup(profileData);
  }

  @Get("profile/:id")
  async getProfileById(@Param("id") id: string): Promise<GroupModel> {
    return this.GroupService.getGroup(id);
  }

  @Get("profile/")
  async getProfiles(): Promise<GroupModel[]> {
    return this.GroupService.getGroups();
  }
}
