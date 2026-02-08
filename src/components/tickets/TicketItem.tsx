import { MessageCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Ticket } from "@/types/ticket";
import { TicketStatusBadge } from "@/components/tickets/TicketStatusBadge";

type TicketItemProps = {
  ticket: Ticket;
  active?: boolean;
};

export function TicketItem({ ticket, active }: TicketItemProps) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card p-4 shadow-sm transition hover:border-primary/50",
        active && "border-primary/60 bg-primary/5"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-foreground">{ticket.title}</p>
          <p className="mt-1 text-xs text-muted-foreground">#{ticket.id}</p>
        </div>
        <TicketStatusBadge status={ticket.status} />
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        {ticket.preview}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>{ticket.date}</span>
        <div className="flex items-center gap-1">
          <MessageCircle className="h-3.5 w-3.5" />
          <span>{ticket.unread ? "New" : "2"}</span>
        </div>
      </div>
    </div>
  );
}
