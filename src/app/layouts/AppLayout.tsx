import { Bell, Search } from "lucide-react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "@/components/sidebar/Sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AppLayout() {
  return (
    <div className="flex min-h-screen bg-transparent">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b bg-background/80 px-6 py-4 backdrop-blur">
          <div>
            <p className="text-xs font-semibold uppercase text-muted-foreground">Helpdesk</p>
            <h1 className="text-xl font-semibold">Ticketing Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative hidden w-72 md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search tickets" className="pl-9" />
            </div>
            <Button size="icon" variant="outline" className="rounded-full">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar className="h-9 w-9">
              <AvatarFallback>MM</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
