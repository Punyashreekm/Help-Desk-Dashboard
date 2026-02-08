import { type ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SidebarItemProps = {
  label: string;
  icon: ReactNode;
  count?: number;
  active?: boolean;
};

export function SidebarItem({ label, icon, count, active }: SidebarItemProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
      )}
    >
      <div className="flex items-center gap-3">
        <span className={cn("h-5 w-5", active ? "text-primary" : "text-muted-foreground")}>
          {icon}
        </span>
        <span>{label}</span>
      </div>
      {typeof count === "number" && (
        <Badge variant={active ? "default" : "soft"} className="rounded-full px-2">
          {count}
        </Badge>
      )}
    </div>
  );
}
