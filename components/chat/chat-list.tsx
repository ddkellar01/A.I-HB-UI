import { Message } from 'ai/react';
import { ChatMessage } from './chat-message';
import { useChatScroll } from '@/hooks/use-chat-scroll';

interface ChatListProps {
  messages: Message[];
}

export function ChatList({ messages }: ChatListProps) {
  const scrollRef = useChatScroll<Message[]>(messages);

  if (!messages.length) return null;

  return (
    <div 
      ref={scrollRef} 
      className="flex-1 space-y-4 mb-20 overflow-y-auto w-full pr-2 scrollbar-thin scrollbar-thumb-green-900 scrollbar-track-transparent"
    >
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
    </div>
  );
}

