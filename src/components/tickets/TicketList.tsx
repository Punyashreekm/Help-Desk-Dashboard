import type { Ticket } from "@/types/ticket";
import { TicketItem } from "@/components/tickets/TicketItem";
import { ScrollArea } from "@/components/ui/scroll-area";

type TicketListProps = {
  tickets: Ticket[];
  activeTicketId: string;
};

export function TicketList({ tickets, activeTicketId }: TicketListProps) {
  return (
    <div className="flex h-full flex-col gap-4">
      <div>
        <p className="text-xs font-semibold uppercase text-muted-foreground">Tickets</p>
        <h2 className="mt-1 text-lg font-semibold">Latest assigned</h2>
      </div>
      <ScrollArea className="h-[calc(100vh-220px)] pr-3">
        <div className="flex flex-col gap-3">
          {tickets.map((ticket) => (
            <TicketItem
              key={ticket.id}
              ticket={ticket}
              active={ticket.id === activeTicketId}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
