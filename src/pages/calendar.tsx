import { CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEvents } from "@/hooks/use-events";

export function CalendarPage() {
  const { data: events, isLoading } = useEvents();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
          <p className="text-muted-foreground">Manage your schedule and deadlines</p>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-8">
        {isLoading ? (
          <div className="flex h-96 items-center justify-center text-muted-foreground">
            Loading events...
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex h-64 items-center justify-center rounded-lg border-2 border-dashed">
              <div className="text-center">
                <CalendarDays className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <p className="mt-4 text-lg font-medium text-muted-foreground">
                  Advanced Calendar View
                </p>
                <p className="text-sm text-muted-foreground/70">
                  Day / Week / Month views coming soon
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-semibold">All Events</h2>
              <div className="space-y-2">
                {events?.map((event) => (
                  <div
                    key={event.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          event.type === "meeting"
                            ? "bg-blue-500"
                            : event.type === "deadline"
                              ? "bg-red-500"
                              : "bg-yellow-500"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-medium">{event.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(event.start).toLocaleDateString("en-US", {
                            weekday: "short",
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        {event.attendees.length} attendee{event.attendees.length !== 1 && "s"}
                      </span>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
