import { CalendarDays, FolderKanban, CheckSquare, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useProjects } from "@/hooks/use-projects";
import { useTasks } from "@/hooks/use-tasks";
import { useEvents } from "@/hooks/use-events";

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="rounded-xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </div>
      <p className="mt-2 text-3xl font-bold tracking-tight">{value}</p>
    </div>
  );
}

export function DashboardPage() {
  const { data: projects } = useProjects();
  const { data: tasks } = useTasks();
  const { data: events } = useEvents();

  const activeTasks = tasks?.filter((t) => t.status !== "done") ?? [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to TeamSync</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Projects" value={projects?.length ?? 0} icon={FolderKanban} />
        <StatCard label="Active Tasks" value={activeTasks.length} icon={CheckSquare} />
        <StatCard label="Upcoming Events" value={events?.length ?? 0} icon={CalendarDays} />
        <StatCard label="Team Members" value={3} icon={Users} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold">Recent Tasks</h2>
          <div className="space-y-3">
            {activeTasks.slice(0, 5).map((task) => (
              <div key={task.id} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium">{task.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {task.assignee?.name ?? "Unassigned"}
                  </p>
                </div>
                <Badge
                  variant={
                    task.priority === "urgent"
                      ? "destructive"
                      : task.priority === "high"
                        ? "default"
                        : "secondary"
                  }
                >
                  {task.priority}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6">
          <h2 className="mb-4 text-lg font-semibold">Upcoming Events</h2>
          <div className="space-y-3">
            {events?.slice(0, 5).map((event) => (
              <div key={event.id} className="flex items-center justify-between rounded-lg border p-3">
                <div>
                  <p className="text-sm font-medium">{event.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(event.start).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <Badge variant="outline">{event.type}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
