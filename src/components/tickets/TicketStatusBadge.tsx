import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { TicketStatus } from "@/types/ticket";

type TicketStatusBadgeProps = {
  status: TicketStatus;
};

const statusConfig: Record<TicketStatus, { label: string; className: string }> = {
  todo: { label: "To Do", className: "bg-amber-100 text-amber-700" },
  done: { label: "Done", className: "bg-emerald-100 text-emerald-700" },
  high: { label: "High Priority", className: "bg-rose-100 text-rose-700" },
};

export function TicketStatusBadge({ status }: TicketStatusBadgeProps) {
  const config = statusConfig[status];
  return (
    <Badge variant="soft" className={cn("border-0", config.className)}>
      {config.label}
    </Badge>
  );
}
