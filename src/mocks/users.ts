import type { User } from "@/types";

export const mockUsers: User[] = [
  {
    id: "u1",
    name: "Anna Kowalska",
    email: "anna@teamsync.io",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=anna",
    role: "admin",
  },
  {
    id: "u2",
    name: "Jan Nowak",
    email: "jan@teamsync.io",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=jan",
    role: "member",
  },
  {
    id: "u3",
    name: "Maria Wiśniewska",
    email: "maria@teamsync.io",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=maria",
    role: "member",
  },
];

export const currentUser = mockUsers[0]!;
