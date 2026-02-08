import {
  Copy,
  Ellipsis,
  Paperclip,
  Sparkles,
  UserPlus,
} from "lucide-react";

import { ConversationThread } from "@/components/conversation/ConversationThread";
import { ReplyEditor } from "@/components/conversation/ReplyEditor";
import { TicketDetailsPanel } from "@/components/metadata/TicketDetailsPanel";
import { TicketList } from "@/components/tickets/TicketList";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Message, Ticket } from "@/types/ticket";

const tickets: Ticket[] = [
  {
    id: "HD-2391",
    title: "Payments failing for enterprise checkout",
    status: "high",
    date: "Today, 9:12 AM",
    customer: "Atlas Commerce",
    preview: "Checkout retry loops after 2.1.4 hotfix. Enterprise merchants can't finalize orders.",
    unread: true,
  },
  {
    id: "HD-2388",
    title: "Slow loading on analytics dashboard",
    status: "todo",
    date: "Today, 8:20 AM",
    customer: "Orion Labs",
    preview: "Reports take 22s to render after last data sync.",
  },
  {
    id: "HD-2379",
    title: "Billing exports missing columns",
    status: "done",
    date: "Yesterday, 4:47 PM",
    customer: "Nimbus Co",
    preview: "CSV exports are missing VAT columns for EU accounts.",
  },
  {
    id: "HD-2365",
    title: "Webhook delivery errors",
    status: "todo",
    date: "Yesterday, 2:13 PM",
    customer: "Verde Retail",
    preview: "Intermittent 504s on webhook endpoints for order created events.",
  },
  {
    id: "HD-2352",
    title: "User invites not sending",
    status: "done",
    date: "Feb 6, 2026",
    customer: "Signal Bridge",
    preview: "New org members are not receiving invite emails in EU region.",
  },
];

const messages: Message[] = [
  {
    id: "msg-1",
    author: "Jules Ortega",
    role: "customer",
    time: "Today, 9:10 AM",
    content:
      "Hi team, we're seeing enterprise checkout failing after the latest hotfix. Payments start but the screen spins and never finishes.",
    attachments: ["checkout-error.mp4", "error-log.txt"],
  },
  {
    id: "msg-2",
    author: "Mila Moretti",
    role: "agent",
    time: "Today, 9:18 AM",
    content:
      "Thanks for the heads up, Jules. We are reviewing the retry loop behavior. Can you confirm if this impacts only the enterprise plan or all tenants?",
  },
  {
    id: "msg-3",
    author: "Jules Ortega",
    role: "customer",
    time: "Today, 9:24 AM",
    content:
      "Only enterprise tenants so far. Standard plans appear okay. We can share the affected org IDs if helpful.",
  },
  {
    id: "msg-4",
    author: "Mila Moretti",
    role: "agent",
    time: "Today, 9:28 AM",
    content:
      "That helps. We'll isolate the enterprise checkout flow and update you within the hour. I'm also adding our payments team to the thread.",
  },
];

export function TicketsPage() {
  const activeTicketId = "HD-2391";
  const activeTicket = tickets[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)_320px]">
      <Card className="h-[calc(100vh-140px)] p-5">
        <TicketList tickets={tickets} activeTicketId={activeTicketId} />
      </Card>

      <Card className="flex h-[calc(100vh-140px)] flex-col gap-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase text-muted-foreground">{activeTicket.customer}</p>
            <h2 className="mt-1 text-xl font-semibold text-balance">{activeTicket.title}</h2>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">#{activeTicket.id}</Badge>
              <Badge variant="soft" className="gap-1">
                <Sparkles className="h-3 w-3" />
                High Impact
              </Badge>
              <Badge variant="soft" className="gap-1">
                <Paperclip className="h-3 w-3" />
                2 attachments
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["MM", "RG", "AK"].map((initials) => (
                <Avatar key={initials} className="h-8 w-8 border-2 border-background">
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <Button size="icon" variant="outline" className="h-8 w-8 rounded-full">
              <UserPlus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Separator />

        <ConversationThread messages={messages} />

        <ReplyEditor />
      </Card>

      <Card className="h-[calc(100vh-140px)] p-5">
        <TicketDetailsPanel />
        <div className="mt-4 flex items-center justify-between rounded-xl border bg-muted/40 p-3 text-sm">
          <div>
            <p className="font-semibold">Last updated</p>
            <p className="text-xs text-muted-foreground">Today, 9:32 AM</p>
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <Copy className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="ghost">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
