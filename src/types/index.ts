export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "member" | "viewer";
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: "active" | "archived" | "draft";
  createdAt: string;
  members: User[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "todo" | "in_progress" | "review" | "done";
  priority: "low" | "medium" | "high" | "urgent";
  assignee?: User;
  projectId: string;
  dueDate?: string;
  createdAt: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: string;
  end: string;
  type: "meeting" | "deadline" | "reminder";
  projectId?: string;
  attendees: User[];
}
