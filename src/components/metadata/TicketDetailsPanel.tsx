import { CalendarDays, Link2, ListTodo, Tag } from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TicketDetailsPanel() {
  return (
    <div className="flex h-full flex-col gap-4 text-sm">
      <div>
        <p className="text-[11px] font-semibold uppercase text-muted-foreground">Ticket Details</p>
        <h2 className="mt-1 text-lg font-semibold">Metadata</h2>
      </div>

      <ScrollArea className="flex-1 pr-3">
        <div className="flex flex-col gap-4">
          <Card className="space-y-4 p-4 text-sm">
            <div className="space-y-2">
              <p className="text-[11px] font-semibold text-muted-foreground">Priority</p>
              <Select defaultValue="high">
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] font-semibold text-muted-foreground">Assigned To</p>
              <Select defaultValue="mila">
                <SelectTrigger>
                  <SelectValue placeholder="Assign" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="mila">Mila Moretti</SelectItem>
                  <SelectItem value="mason">Mason Grant</SelectItem>
                  <SelectItem value="rhea">Rhea Carter</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] font-semibold text-muted-foreground">Project</p>
              <Input defaultValue="Atlas Commerce" />
            </div>

            <div className="space-y-2">
              <p className="text-[11px] font-semibold text-muted-foreground">Ticket Type</p>
              <Select defaultValue="bug">
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bug">Bug</SelectItem>
                  <SelectItem value="request">Feature Request</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] font-semibold text-muted-foreground">Due Date</p>
              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input type="date" className="pl-9" defaultValue="2026-02-14" />
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[11px] font-semibold text-muted-foreground">Reporter</p>
              <Input defaultValue="Jules Ortega" />
            </div>

            <div className="space-y-2">
              <p className="text-[11px] font-semibold text-muted-foreground">Tags</p>
              <div className="flex flex-wrap gap-2">
                {"payments,checkout,enterprise".split(",").map((tag) => (
                  <Badge key={tag} variant="secondary" className="gap-1">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>

          <Accordion type="multiple" defaultValue={["tasks"]} className="space-y-3">
            <AccordionItem value="tasks">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <ListTodo className="h-4 w-4 text-muted-foreground" />
                  Tasks
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Confirm rollback plan with DevOps</li>
                  <li>Request customer logs for 2/7 build</li>
                  <li>Schedule follow-up meeting</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="linked">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <Link2 className="h-4 w-4 text-muted-foreground" />
                  Linked Tickets
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <span>HD-2216 • Billing sync delay</span>
                  <span>HD-2188 • Checkout latency spike</span>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="history">
              <AccordionTrigger>
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-muted-foreground" />
                  History
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <span>Feb 7, 2026 • Assigned to Mila</span>
                  <span>Feb 6, 2026 • Marked High Priority</span>
                  <span>Feb 5, 2026 • Ticket created</span>
                </div>
                <Button size="sm" variant="outline" className="mt-3">
                  View full history
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );
}
