import { CheckCircle2, Clock3, AlertCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Ticket } from "@/types/ticket";
import { TicketStatusBadge } from "@/components/tickets/TicketStatusBadge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type TicketItemProps = {
  ticket: Ticket;
  active?: boolean;
};

export function TicketItem({ ticket, active }: TicketItemProps) {
  const indicator =
    ticket.status === "high"
      ? {
          icon: <AlertCircle className="h-4 w-4" />,
          className: "border-rose-200 text-rose-600",
        }
      : ticket.status === "done"
        ? {
            icon: <CheckCircle2 className="h-4 w-4" />,
            className: "border-emerald-200 text-emerald-600",
          }
        : {
            icon: <Clock3 className="h-4 w-4" />,
            className: "border-amber-200 text-amber-600",
          };

  return (
    <div
      className={cn(
        "relative border-b px-4 py-4 transition hover:bg-muted/40",
        active && "bg-primary/5",
      )}
    >
      {active && (
        <span className="absolute left-0 top-0 h-full w-1 bg-primary" />
      )}
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <p className="text-xs font-semibold text-foreground">
              {ticket.title}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-input text-primary"
            />{" "}
            <span className="font-semibold text-foreground">#{ticket.id}</span>
            <TicketStatusBadge status={ticket.status} />
            <Badge
              variant="secondary"
              className={cn("gap-1 border bg-background", indicator.className)}
            >
              {indicator.icon}
            </Badge>
            <div className="flex -space-x-2">
              {["MM", "RG"].map((initials) => (
                <Avatar
                  key={initials}
                  className="h-6 w-6 border-2 border-background"
                >
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
        <span className="text-xs text-muted-foreground">{ticket.date}</span>
      </div>
    </div>
  );
}
