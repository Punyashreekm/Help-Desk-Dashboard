import { Copy, Ellipsis, Paperclip, Sparkles, UserPlus } from "lucide-react";

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
    date: "Jun 2",
    customer: "Atlas Commerce",
    preview:
      "Checkout retry loops after 2.1.4 hotfix. Enterprise merchants can't finalize orders.",
    unread: true,
  },
  {
    id: "HD-2389",
    title: "Refund status stuck in processing",
    status: "todo",
    date: "Jun 2",
    customer: "Drift Labs",
    preview: "Refunds remain pending beyond 24 hours in dashboard.",
  },
  {
    id: "HD-2388",
    title: "Slow loading on analytics dashboard",
    status: "todo",
    date: "Jun 2",
    customer: "Orion Labs",
    preview: "Reports take 22s to render after last data sync.",
  },
  {
    id: "HD-2381",
    title: "Webhook delivery errors",
    status: "todo",
    date: "Jun 1",
    customer: "Verde Retail",
    preview: "Intermittent 504s on webhook endpoints for order created events.",
  },
  {
    id: "HD-2379",
    title: "Billing exports missing columns",
    status: "done",
    date: "Jun 1",
    customer: "Nimbus Co",
    preview: "CSV exports are missing VAT columns for EU accounts.",
  },
  {
    id: "HD-2374",
    title: "Chargeback alerts delayed",
    status: "todo",
    date: "May 31",
    customer: "Slate Group",
    preview: "Chargeback notifications arrive 3 hours late.",
  },
  {
    id: "HD-2368",
    title: "Admin invites not sending",
    status: "done",
    date: "May 31",
    customer: "Signal Bridge",
    preview: "New org members are not receiving invite emails in EU region.",
  },
  {
    id: "HD-2362",
    title: "Charge capture failures on subscriptions",
    status: "high",
    date: "May 30",
    customer: "Pulse Media",
    preview: "Recurring charges fail for subscriptions created before May.",
  },
  {
    id: "HD-2355",
    title: "Export jobs timing out",
    status: "todo",
    date: "May 30",
    customer: "Atlas Commerce",
    preview: "Large exports hit timeout at 75% completion.",
  },
  {
    id: "HD-2349",
    title: "Invoices not syncing to QuickBooks",
    status: "done",
    date: "May 29",
    customer: "Horizon Banking",
    preview: "Sync jobs stuck in queue for QBO integration.",
  },
  {
    id: "HD-2342",
    title: "Portal login latency spike",
    status: "todo",
    date: "May 29",
    customer: "Waverly & Co",
    preview: "Customer login attempts exceed 7 seconds in EU.",
  },
  {
    id: "HD-2334",
    title: "Tiered pricing mismatch",
    status: "high",
    date: "May 28",
    customer: "Boreal Systems",
    preview: "Volume pricing recalculates incorrectly on renewal.",
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
    <div className="grid h-[calc(100vh-80px)] gap-0 lg:grid-cols-[320px_minmax(0,1fr)_320px]">
      <Card className="rounded-none border-r shadow-none">
        <TicketList tickets={tickets} activeTicketId={activeTicketId} />
      </Card>

      <Card className="flex flex-col gap-4 rounded-none border-r shadow-none">
        <div className="px-4 pt-4">
          <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase text-muted-foreground">
              {activeTicket.customer}
            </p>
            <h2 className="mt-1 text-xl font-semibold text-balance">
              {activeTicket.title}
            </h2>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">#{activeTicket.id}</Badge>
              <Badge variant="soft" className="gap-1">
                <Sparkles className="h-3 w-3" />
                High Impact
              </Badge>
              <Badge variant="soft" className="gap-1">
                <Paperclip className="h-3 w-3" />2 attachments
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {["MM", "RG", "AK"].map((initials) => (
                <Avatar
                  key={initials}
                  className="h-8 w-8 border-2 border-background"
                >
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8 rounded-full"
            >
              <UserPlus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        </div>

        <Separator />

        <ConversationThread messages={messages} />

        <div className="px-4 pb-4">
          <ReplyEditor />
        </div>
      </Card>

      <Card className="flex flex-col rounded-none shadow-none">
        <div className="flex min-h-0 flex-1 flex-col px-4 pt-4">
          <TicketDetailsPanel />
        </div>
        <div className="mx-4 mb-4 flex items-center justify-between rounded-xl border bg-muted/40 p-3 text-sm">
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
