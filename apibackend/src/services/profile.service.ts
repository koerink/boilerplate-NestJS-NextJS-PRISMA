import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { Profile as ProfileModel } from "@prisma/client";

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async createProfile(profileData): Promise<ProfileModel> {
    const result = await this.prisma.profile.create({ data: profileData });
    return result;
  }

  async getProfile(id: string): Promise<ProfileModel> {
    return this.prisma.profile.findUnique({ where: { id } });
  }

  async getProfiles(): Promise<ProfileModel[]> {
    return this.prisma.profile.findMany();
  }
}
