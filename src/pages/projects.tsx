import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useProjects } from "@/hooks/use-projects";
import { userFullName, userInitials } from "@/lib/user";
import { EmptyState } from "@/components/ui/emptyState";
import { FolderOpen } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState } from "@/components/ui/errorState";
import { CreateProjectDialog } from "@/components/projects/create-project";

const statusColor = {
  active: "default",
  archived: "secondary",
  draft: "outline",
} as const;

export function ProjectsPage() {
  const { data: projects, isLoading, isError, refetch } = useProjects();

  const isProjectsListEmpty = projects?.length === 0

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-muted-foreground">Manage and track your team projects</p>

        <CreateProjectDialog />
      </div>

      {isLoading ? (
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((cardId) => (
            <div key={cardId} className="border bg-card p-6 rounded-xl space-y-4">
              <Skeleton className="h-6 w-1/2" />
              <div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex -space-x-2 shrink-0">
                  <Skeleton className="h-6 w-6 rounded-full border-2 border-background" />
                  <Skeleton className="h-6 w-6 rounded-full border-2 border-background" />
                </div>
                  <Skeleton className="h-2 flex-1" />
                </div>
            </div>
          ))}
        </div>

        ) : isError ? (
        <ErrorState retryAction={refetch} />

        ) : isProjectsListEmpty ? (
        <EmptyState 
          title="Brak projektów"
          description="Nie utworzono żadnych projektów."
          icon={FolderOpen}
        />
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
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Progress</span>
                  <span>{project.progressPercent}%</span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${project.progressPercent}%` }}
                  />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {project.members.map((member) => (
                    <Tooltip key={member.id}>
                      <TooltipTrigger>
                        <Avatar className="h-7 w-7 border-2 border-background">
                          <AvatarImage src={member.avatar} alt={userFullName(member)} />
                          <AvatarFallback className="text-xs">{userInitials(member)}</AvatarFallback>
                        </Avatar>
                      </TooltipTrigger>
                      <TooltipContent>{userFullName(member)}</TooltipContent>
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
