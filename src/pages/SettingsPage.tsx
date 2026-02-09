import { Bell, Globe, Lock, Palette } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function SettingsPage() {
  return (
    <div className="grid gap-6 p-6">
      <div>
        <p className="text-xs font-semibold uppercase text-muted-foreground">Workspace</p>
        <h2 className="mt-1 text-xl font-semibold">Settings</h2>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Profile</h3>
            <p className="text-sm text-muted-foreground">Update your support workspace profile.</p>
          </div>
          <Button>Save changes</Button>
        </div>

        <Separator className="my-6" />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">Workspace name</p>
            <Input defaultValue="Helios Desk" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">Support email</p>
            <Input defaultValue="support@heliosdesk.com" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">Timezone</p>
            <Input defaultValue="Pacific Time (US & Canada)" />
          </div>
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">Reply signature</p>
            <Input defaultValue="Mila · Helios Desk" />
          </div>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-muted p-2 text-muted-foreground">
              <Bell className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold">Notifications</p>
              <p className="text-xs text-muted-foreground">Manage alert rules.</p>
            </div>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            {[
              "Send SLA breach alerts",
              "Daily summary email",
              "Escalation reminders",
            ].map((label) => (
              <label key={label} className="flex items-center justify-between">
                <span>{label}</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-muted p-2 text-muted-foreground">
              <Palette className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold">Branding</p>
              <p className="text-xs text-muted-foreground">Tone and visuals.</p>
            </div>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            {[
              "Use accent color in replies",
              "Show team avatars in portal",
              "Enable custom ticket form",
            ].map((label) => (
              <label key={label} className="flex items-center justify-between">
                <span>{label}</span>
                <input type="checkbox" defaultChecked className="h-4 w-4" />
              </label>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-muted p-2 text-muted-foreground">
              <Globe className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold">Security</p>
              <p className="text-xs text-muted-foreground">Access and compliance.</p>
            </div>
          </div>
          <div className="mt-4 space-y-3 text-sm">
            {[
              "Require 2FA for agents",
              "Restrict IP access",
              "Auto-archive closed tickets",
            ].map((label) => (
              <label key={label} className="flex items-center justify-between">
                <span>{label}</span>
                <input type="checkbox" className="h-4 w-4" />
              </label>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-4 w-4" />
            Changes apply instantly.
          </div>
        </Card>
      </div>
    </div>
  );
}
