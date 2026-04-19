import type { Project } from "@/types";
import { mockUsers } from "./users";

export const mockProjects: Project[] = [
  {
    id: "p1",
    name: "TeamSync MVP",
    description: "Core platform features for the initial release",
    status: "active",
    createdAt: "2026-01-15T10:00:00Z",
    members: mockUsers,
  },
  {
    id: "p2",
    name: "Marketing Website",
    description: "Landing page and documentation site",
    status: "active",
    createdAt: "2026-02-20T08:00:00Z",
    members: mockUsers.slice(0, 2),
  },
  {
    id: "p3",
    name: "Mobile App",
    description: "React Native companion app",
    status: "draft",
    createdAt: "2026-03-10T14:00:00Z",
    members: [mockUsers[0]!],
  },
];
