import { Bell, Search } from "lucide-react";
import { Outlet } from "react-router-dom";

import { Sidebar } from "@/components/sidebar/Sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AppLayout() {
  return (
    <div className="min-h-screen bg-transparent">
      <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-background/80 backdrop-blur">
        <Sidebar />
      </aside>
      <div className="ml-64 flex min-h-screen flex-col">
        <header className="fixed left-64 right-0 top-0 z-20 flex items-center justify-between border-b bg-background/80 px-6 py-4 backdrop-blur">
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
        <main className="mt-[72px] flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
