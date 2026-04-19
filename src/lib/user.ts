import type { User } from "@/types";

export function userFullName(user: User): string {
  return `${user.firstName} ${user.lastName}`;
}

export function userInitials(user: User): string {
  const a = user.firstName.charAt(0);
  const b = user.lastName.charAt(0);
  return `${a}${b}`.toUpperCase();
}
