import { BarChart3, CircleAlert, Inbox, Layers, Tag } from "lucide-react";

import { SidebarItem } from "@/components/sidebar/SidebarItem";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { label: "My Tickets", icon: <Inbox className="h-5 w-5" />, count: 18, active: true },
  { label: "Past Due", icon: <CircleAlert className="h-5 w-5" />, count: 6 },
  { label: "High Priority", icon: <Tag className="h-5 w-5" />, count: 4 },
  { label: "Unassigned", icon: <Layers className="h-5 w-5" />, count: 12 },
  { label: "All Tickets", icon: <BarChart3 className="h-5 w-5" />, count: 128 },
];

export function Sidebar() {
  return (
    <aside className="flex h-full w-64 flex-col gap-6 border-r bg-background/80 p-5 backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft">
            <span className="text-base font-bold">HD</span>
          </div>
          <div>
            <p className="text-sm font-semibold">Helios Desk</p>
            <p className="text-xs text-muted-foreground">Support Center</p>
          </div>
        </div>
        <Button size="icon" variant="outline" className="h-8 w-8 rounded-full">
          +
        </Button>
      </div>

      <Separator />

      <div className="flex flex-col gap-2">
        {navItems.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </div>

      <div className="mt-auto rounded-xl border bg-muted/40 p-4 text-sm">
        <p className="text-xs font-semibold uppercase text-muted-foreground">Quick Tip</p>
        <p className="mt-2 text-sm text-foreground">
          Use tags to keep high-impact issues visible across the team.
        </p>
        <Button className="mt-3 w-full" size="sm">
          Learn more
        </Button>
      </div>
    </aside>
  );
}
