import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "@/app/layouts/AppLayout";
import { TicketsPage } from "@/pages/TicketsPage";
import { AnalyticsPage } from "@/pages/AnalyticsPage";
import { TeamPage } from "@/pages/TeamPage";
import { SettingsPage } from "@/pages/SettingsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <TicketsPage />,
      },
      {
        path: "tickets",
        element: <TicketsPage />,
      },
      {
        path: "past-due",
        element: <AnalyticsPage />,
      },
      {
        path: "high-priority",
        element: <AnalyticsPage />,
      },
      {
        path: "unassigned",
        element: <AnalyticsPage />,
      },
      {
        path: "team",
        element: <TeamPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);
