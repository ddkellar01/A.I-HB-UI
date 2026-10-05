'use client';

import { useChat } from 'ai/react';
import { MatrixHeartbeat } from '@/components/ui/matrix-heartbeat';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="relative min-h-screen text-green-400 font-mono">
      {/* Background Matrix Canvas */}
      <MatrixHeartbeat />

      {/* Foreground AI Interface Overlay */}
      <div className="flex flex-col w-full max-w-2xl py-24 mx-auto min-h-screen px-4">
        <div className="flex-1 space-y-4 mb-20 overflow-y-auto">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`p-4 rounded-lg border backdrop-blur-md ${
                m.role === 'user'
                  ? 'bg-black/60 border-green-500/50 text-green-300 ml-auto max-w-[80%]'
                  : 'bg-black/80 border-green-400/80 text-green-100 max-w-[90%]'
              }`}
            >
              <strong className="block mb-1 text-xs opacity-70">
                {m.role === 'user' ? 'SYSTEM > USER' : 'SYSTEM > AI'}
              </strong>
              <p className="whitespace-pre-wrap">{m.content}</p>
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
        >
          <input
            className="w-full p-4 bg-black/90 border border-green-500/80 text-green-300 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.2)] focus:outline-none focus:border-green-400 placeholder-green-700 font-mono"
            value={input}
            placeholder="Type command or prompt..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </main>
  );
}
