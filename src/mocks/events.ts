import type { CalendarEvent } from "@/types";
import { mockUsers } from "./users";

export const mockEvents: CalendarEvent[] = [
  {
    id: "e1",
    title: "Sprint Planning",
    description: "Plan tasks for Sprint 12",
    start: "2026-04-21T09:00:00Z",
    end: "2026-04-21T10:30:00Z",
    type: "meeting",
    projectId: "p1",
    attendees: mockUsers,
  },
  {
    id: "e2",
    title: "API Documentation Deadline",
    start: "2026-04-20T23:59:00Z",
    end: "2026-04-20T23:59:00Z",
    type: "deadline",
    projectId: "p1",
    attendees: [mockUsers[2]!],
  },
  {
    id: "e3",
    title: "Design Review",
    description: "Review calendar UI mockups",
    start: "2026-04-22T14:00:00Z",
    end: "2026-04-22T15:00:00Z",
    type: "meeting",
    projectId: "p1",
    attendees: mockUsers.slice(0, 2),
  },
  {
    id: "e4",
    title: "Release v0.1",
    start: "2026-04-30T18:00:00Z",
    end: "2026-04-30T18:00:00Z",
    type: "deadline",
    projectId: "p1",
    attendees: mockUsers,
  },
];
