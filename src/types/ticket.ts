export type TicketStatus = "todo" | "done" | "high";

export type Ticket = {
  id: string;
  title: string;
  status: TicketStatus;
  date: string;
  customer: string;
  preview: string;
  unread?: boolean;
};

export type Message = {
  id: string;
  author: string;
  role: "agent" | "customer";
  time: string;
  content: string;
  attachments?: string[];
};
