import { BarChart3, Clock, ShieldCheck, TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const metrics = [
  { label: "SLA Compliance", value: "96.4%", change: "+1.2%", icon: <ShieldCheck className="h-4 w-4" /> },
  { label: "Avg. First Reply", value: "12m", change: "-3m", icon: <Clock className="h-4 w-4" /> },
  { label: "Tickets Resolved", value: "214", change: "+18", icon: <BarChart3 className="h-4 w-4" /> },
  { label: "CSAT", value: "4.8", change: "+0.2", icon: <TrendingUp className="h-4 w-4" /> },
];

const activity = [
  { label: "Enterprise", value: 54, widthClass: "w-[54%]" },
  { label: "SMB", value: 32, widthClass: "w-[32%]" },
  { label: "Self-serve", value: 14, widthClass: "w-[14%]" },
];

const volumeBars = [
  { heightClass: "h-[32%]", label: "M" },
  { heightClass: "h-[44%]", label: "T" },
  { heightClass: "h-[28%]", label: "W" },
  { heightClass: "h-[52%]", label: "T" },
  { heightClass: "h-[40%]", label: "F" },
  { heightClass: "h-[60%]", label: "S" },
  { heightClass: "h-[38%]", label: "S" },
];

export function AnalyticsPage() {
  return (
    <div className="grid gap-6">
      <div>
        <p className="text-xs font-semibold uppercase text-muted-foreground">Overview</p>
        <h2 className="mt-1 text-xl font-semibold">Operational Analytics</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="bg-background/80">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle className="text-sm font-semibold text-muted-foreground">
                {metric.label}
              </CardTitle>
              <div className="rounded-full bg-muted p-2 text-muted-foreground">
                {metric.icon}
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="text-2xl font-semibold text-foreground">{metric.value}</div>
              <Badge variant="secondary" className="mt-2 w-fit">
                {metric.change}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase text-muted-foreground">Volume</p>
              <h3 className="mt-1 text-lg font-semibold">Ticket flow</h3>
            </div>
            <Badge variant="soft">Last 7 days</Badge>
          </div>
          <div className="mt-6 grid grid-cols-7 gap-3">
            {volumeBars.map((bar) => (
              <div key={bar.label} className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
                <div className="flex h-36 w-8 items-end rounded-full bg-muted">
                  <div className={`w-full rounded-full bg-primary ${bar.heightClass}`} />
                </div>
                <span>{bar.label}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div>
            <p className="text-xs font-semibold uppercase text-muted-foreground">Segments</p>
            <h3 className="mt-1 text-lg font-semibold">Customer mix</h3>
          </div>
          <div className="mt-6 space-y-4">
            {activity.map((segment) => (
              <div key={segment.label} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-foreground">{segment.label}</span>
                  <span className="text-muted-foreground">{segment.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted">
                  <div className={`h-full rounded-full bg-primary ${segment.widthClass}`} />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
