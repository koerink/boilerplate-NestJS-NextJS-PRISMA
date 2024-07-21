import { Module } from "@nestjs/common";
import { AccountModule } from "src/account/account.modul";
import { RoleModule } from "src/role/role.modul";

@Module({
  imports: [AccountModule, RoleModule],
})
export class AppModule {}
