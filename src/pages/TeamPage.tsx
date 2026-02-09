import { Mail, Phone, Plus, ShieldCheck } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const team = [
  { name: "Mila Moretti", role: "Lead Support", status: "Online", phone: "+1 (415) 994-2044" },
  { name: "Rhea Carter", role: "Escalations", status: "On-call", phone: "+1 (650) 203-1091" },
  { name: "Mason Grant", role: "Support Engineer", status: "Offline", phone: "+1 (312) 218-9042" },
  { name: "Aiden Kim", role: "Payments SME", status: "Online", phone: "+1 (617) 840-1188" },
];

const statusStyles: Record<string, string> = {
  Online: "bg-emerald-100 text-emerald-700",
  "On-call": "bg-amber-100 text-amber-700",
  Offline: "bg-slate-100 text-slate-700",
};

export function TeamPage() {
  return (
    <div className="grid gap-6 p-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase text-muted-foreground">People</p>
          <h2 className="mt-1 text-xl font-semibold">Support Team</h2>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add teammate
        </Button>
      </div>

      <div className="grid gap-4 p-4 md:grid-cols-2 xl:grid-cols-3">
        {team.map((member) => (
          <Card key={member.name} className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>{member.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <Badge variant="soft" className={statusStyles[member.status]}>
                {member.status}
              </Badge>
            </div>

            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                {member.name.toLowerCase().replace(" ", ".")}@heliosdesk.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {member.phone}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-lg border bg-muted/40 px-3 py-2 text-xs">
              <span className="text-muted-foreground">SLA rating</span>
              <div className="flex items-center gap-2 text-emerald-600">
                <ShieldCheck className="h-4 w-4" />
                98%
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
