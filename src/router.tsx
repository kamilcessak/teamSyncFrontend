import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "@/components/layout/root-layout";
import { DashboardPage } from "@/pages/dashboard";
import { CalendarPage } from "@/pages/calendar";
import { ProjectsPage } from "@/pages/projects";
import { TasksPage } from "@/pages/tasks";
import { NotFoundPage } from "@/pages/not-found";
import { LoginPage } from "@/pages/login";
import { RegisterPage } from "@/pages/register";
import { ForgotPasswordPage } from "@/pages/forgot-password";

export const router = createBrowserRouter([
  { path: "login", element: <LoginPage /> },
  { path: "register", element: <RegisterPage /> },
  { path: "forgot-password", element: <ForgotPasswordPage /> },
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "calendar", element: <CalendarPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "tasks", element: <TasksPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
