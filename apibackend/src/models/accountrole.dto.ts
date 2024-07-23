export class AccountroleDto {
  id: string;
  version: number;

  username: string;

  email: string;

  emailVerified: boolean;

  password: string;

  profile: string[];

  roleId: string;

  role: {
    id: string;
    version: number;
    name: string;
    role: string[];
    CreateDateColumn: Date;
    UpdateDateColumn: Date;
  };

  CreateDateColumn: Date;

  UpdateDateColumn: Date;
}
