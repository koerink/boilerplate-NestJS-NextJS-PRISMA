export class jwtDto {
  constructor(
    version: number,
    email: string,
    roleId: string,
    roleversion: number,
    rolename: string,
    rolerole: string[],
  ) {
    this.version = version;
    this.email = email;
    this.roleId = roleId;
    this.role = {
      version: roleversion,
      name: rolename,
      role: rolerole,
    };
  }

  version: number;
  email: string;
  roleId: string;
  role: {
    version: number;
    name: string;
    role: string[];
  };
}
