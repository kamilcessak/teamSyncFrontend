import type {
  CalendarEvent,
  DashboardStats,
  Project,
  Task,
  User,
} from "@/types";

const avatar = (seed: string) =>
  `https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(seed)}`;

/** Członkowie zespołu (dokumentacja). */
export const mockUsers: User[] = [
  {
    id: "u-adrian",
    firstName: "Adrian",
    lastName: "Bąk",
    email: "adrian.bak@teamsync.io",
    role: "admin",
    avatar: avatar("adrian-bak"),
  },
  {
    id: "u-yuri",
    firstName: "Yuri",
    lastName: "Andreiev",
    email: "yuri.andreiev@teamsync.io",
    role: "member",
    avatar: avatar("yuri-andreiev"),
  },
  {
    id: "u-kamil",
    firstName: "Kamil",
    lastName: "Cessak",
    email: "kamil.cessak@teamsync.io",
    role: "member",
    avatar: avatar("kamil-cessak"),
  },
  {
    id: "u-pawel",
    firstName: "Paweł",
    lastName: "Chwalczuk",
    email: "pawel.chwalczuk@teamsync.io",
    role: "member",
    avatar: avatar("pawel-chwalczuk"),
  },
];

const [adrian, yuri, kamil, pawel] = mockUsers;

/** Zadania z dashboardu. */
export const mockTasks: Task[] = [
  {
    id: "t-calendar",
    title: "Design calendar component",
    description: "Create the main calendar view with day/week/month modes",
    assignee: adrian!,
    priority: "high",
    status: "in_progress",
    dueDate: "2026-04-25T23:59:00.000Z",
    projectId: "p1",
  },
  {
    id: "t-auth",
    title: "Set up authentication flow",
    description: "Implement login/logout with JWT tokens",
    assignee: yuri!,
    priority: "urgent",
    status: "todo",
    dueDate: "2026-04-22T23:59:00.000Z",
    projectId: "p1",
  },
  {
    id: "t-api-docs",
    title: "Write API documentation",
    description: "Document all REST endpoints for the backend team",
    assignee: kamil!,
    priority: "medium",
    status: "in_progress",
    dueDate: "2026-04-20T23:59:00.000Z",
    projectId: "p1",
  },
  {
    id: "t-cicd",
    title: "Configure CI/CD pipeline",
    description: "Set up GitHub Actions for automated testing and deployment",
    assignee: pawel!,
    priority: "low",
    status: "todo",
    dueDate: "2026-04-30T23:59:00.000Z",
    projectId: "p1",
  },
];

export const mockProjects: Project[] = [
  {
    id: "p1",
    name: "TeamSync MVP",
    description: "Core platform features for the initial release",
    status: "active",
    progressPercent: 68,
    createdAt: "2026-01-15T10:00:00.000Z",
    members: mockUsers,
  },
  {
    id: "p2",
    name: "Marketing Website",
    description: "Landing page and documentation site",
    status: "active",
    progressPercent: 42,
    createdAt: "2026-02-20T08:00:00.000Z",
    members: [adrian!, yuri!],
  },
  {
    id: "p3",
    name: "Mobile App",
    description: "React Native companion app",
    status: "draft",
    progressPercent: 12,
    createdAt: "2026-03-10T14:00:00.000Z",
    members: [adrian!],
  },
];

export const mockEvents: CalendarEvent[] = [
  {
    id: "e1",
    title: "Sprint Planning",
    description: "Plan tasks for Sprint 12",
    start: "2026-04-21T09:00:00.000Z",
    end: "2026-04-21T10:30:00.000Z",
    type: "meeting",
    projectId: "p1",
    attendees: mockUsers,
  },
  {
    id: "e2",
    title: "API Documentation Deadline",
    start: "2026-04-20T23:59:00.000Z",
    end: "2026-04-20T23:59:00.000Z",
    type: "deadline",
    projectId: "p1",
    attendees: [kamil!],
  },
  {
    id: "e3",
    title: "Design Review",
    description: "Review calendar UI mockups",
    start: "2026-04-22T14:00:00.000Z",
    end: "2026-04-22T15:00:00.000Z",
    type: "meeting",
    projectId: "p1",
    attendees: [adrian!, yuri!],
  },
  {
    id: "e4",
    title: "Release v0.1",
    start: "2026-04-30T18:00:00.000Z",
    end: "2026-04-30T18:00:00.000Z",
    type: "deadline",
    projectId: "p1",
    attendees: mockUsers,
  },
];

const activeTasks = mockTasks.filter((t) => t.status !== "done");

export const mockDashboardStats: DashboardStats = {
  projectCount: mockProjects.length,
  activeTaskCount: activeTasks.length,
  upcomingEventCount: mockEvents.length,
  teamMemberCount: mockUsers.length,
};

/** Ostatnie zadania (kolejność jak na dashboardzie). */
export const mockRecentTasks: Task[] = [...mockTasks];

/** Nadchodzące wydarzenia — posortowane rosnąco po `start`. */
export const mockUpcomingEvents: CalendarEvent[] = [...mockEvents].sort(
  (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
);
