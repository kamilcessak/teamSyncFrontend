import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useProjects } from "@/hooks/use-projects";

const statusColor = {
  active: "default",
  archived: "secondary",
  draft: "outline",
} as const;

export function ProjectsPage() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">Manage and track your team projects</p>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">Loading projects...</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects?.map((project) => (
            <div key={project.id} className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-md">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">{project.name}</h3>
                <Badge variant={statusColor[project.status]}>{project.status}</Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {project.members.map((member) => (
                    <Tooltip key={member.id}>
                      <TooltipTrigger>
                        <Avatar className="h-7 w-7 border-2 border-background">
                          <AvatarImage src={member.avatar} alt={member.name} />
                          <AvatarFallback className="text-xs">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>{member.name}</TooltipContent>
                    </Tooltip>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  {new Date(project.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
