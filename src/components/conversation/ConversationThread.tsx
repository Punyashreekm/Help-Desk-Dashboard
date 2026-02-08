import type { Message } from "@/types/ticket";
import { MessageBubble } from "@/components/conversation/MessageBubble";
import { ScrollArea } from "@/components/ui/scroll-area";

type ConversationThreadProps = {
  messages: Message[];
};

export function ConversationThread({ messages }: ConversationThreadProps) {
  return (
    <ScrollArea className="h-[calc(100vh-370px)] pr-3">
      <div className="flex flex-col gap-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>
    </ScrollArea>
  );
}
