import { Paperclip } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Message } from "@/types/ticket";

type MessageBubbleProps = {
  message: Message;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  const isAgent = message.role === "agent";

  return (
    <div
      className={cn(
        "flex items-start gap-3",
        isAgent ? "flex-row-reverse" : "",
      )}
    >
      <Avatar className="h-9 w-9">
        <AvatarFallback>
          {message.author.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "w-full max-w-xl rounded-2xl border px-4 py-3 text-sm shadow-sm",
          isAgent
            ? "border-primary/30 bg-primary/5"
            : "border-border bg-background",
        )}
      >
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">
            {message.author}
          </span>
          <span>{message.time}</span>
        </div>
        <p className="mt-2 leading-relaxed text-foreground">
          {message.content}
        </p>
        {message.attachments && message.attachments.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {message.attachments.map((item) => (
              <Badge key={item} variant="secondary" className="gap-1">
                <Paperclip className="h-3 w-3" />
                {item}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
