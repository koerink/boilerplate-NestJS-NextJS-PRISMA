import { Module } from "@nestjs/common";
import { AccountModule } from "src/module/account.modul";
import { RoleModule } from "./role.modul";

@Module({
  imports: [AccountModule, RoleModule],
})
export class AppModule {}
