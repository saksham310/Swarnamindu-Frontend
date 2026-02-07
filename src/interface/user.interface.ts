import type { UserRole } from "@/constants/user.constants";

export interface User {
  name: string;
  role: UserRole;
}