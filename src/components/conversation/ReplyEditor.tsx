import { Bold, Italic, Paperclip, Send, Smile } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ReplyEditor() {
  return (
    <div className="rounded-2xl border bg-background p-4 shadow-sm">
      <Textarea placeholder="Write your reply..." className="min-h-[120px]" />
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <Bold className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <Italic className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <Smile className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <Paperclip className="h-4 w-4" />
          </Button>
        </div>
        <Button className="gap-2">
          Send Reply
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
