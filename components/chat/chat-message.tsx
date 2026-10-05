import { Message } from 'ai/react';
import { cn } from '@/lib/utils';

export function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn(
        'p-4 rounded-lg border backdrop-blur-md shadow-[0_0_10px_rgba(0,255,0,0.1)]',
        isUser
          ? 'bg-black/60 border-green-500/50 text-green-300 ml-auto max-w-[80%]'
          : 'bg-black/80 border-green-400/80 text-green-100 max-w-[90%]'
      )}
    >
      <strong className="block mb-1 text-xs opacity-70">
        {isUser ? '> SYSTEM > USER' : '> SYSTEM > AI'}
      </strong>
      <p className="whitespace-pre-wrap">{message.content}</p>
    </div>
  );
}
