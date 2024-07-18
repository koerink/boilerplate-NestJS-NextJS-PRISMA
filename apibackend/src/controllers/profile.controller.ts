import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import { ProfileService } from "../services/profile.service";
import { Profile as ProfileModel } from "@prisma/client";

@Controller("Profile")
export class ProfileController {
  constructor(private readonly ProfileService: ProfileService) {}

  @Post("profile")
  async createProfile(
    @Body()
    profileData: {
      profileData?: string;
      email: string;
      password?: string;
      groupId?: string;
    },
  ): Promise<ProfileModel> {
    return this.ProfileService.createProfile(profileData);
  }

  @Get("profile/:id")
  async getProfileById(@Param("id") id: string): Promise<ProfileModel> {
    return this.ProfileService.getProfile(id);
  }

  @Get("profile/")
  async getProfiles(): Promise<ProfileModel[]> {
    return this.ProfileService.getProfiles();
  }
}
