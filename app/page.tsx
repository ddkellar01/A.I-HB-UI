'use client';

import { useChat } from 'ai/react';
import { MatrixHeartbeat } from '@/components/ui/matrix-heartbeat';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <main className="relative min-h-screen text-green-400 font-mono overflow-hidden">
      {/* Background Matrix Canvas with Grid */}
      <MatrixHeartbeat />

      {/* Static Diagnostic Overlays */}
      <div className="absolute top-6 left-6 p-4 border border-green-500/50 bg-black/70 pointer-events-none z-10 shadow-[0_0_10px_rgba(0,255,0,0.2)]">
        <p>{'>'} SYSTEM_DIAG {'>'} VITAL_SIGNS</p>
        <p>{'>'} HEART_SILHOUETTE_FORMED [STABLE]</p>
        <p>{'>'} RHYTHM_SCAN: COMPLETED</p>
        <p>{'>'} TARGET_STATUS: ALIVE</p>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[150px] pointer-events-none z-10 text-center">
        <p className="mb-1">{'>'} LIFE_SCAN_IN_PROGRESS</p>
        <div className="w-full h-[2px] bg-green-400 shadow-[0_0_10px_rgba(0,255,0,0.8)]"></div>
      </div>

      <div className="absolute bottom-6 right-6 p-4 border border-green-500/50 bg-black/70 pointer-events-none z-10 flex gap-4 text-xs shadow-[0_0_10px_rgba(0,255,0,0.2)]">
        <div className="opacity-70">
          <p>00 8E 83 84 94 06 88 9E 8L</p>
          <p>00 06 82 00 58 10 65 65 5D</p>
          <p>80 01 85 D6 32 75 7F 6D 29</p>
          <p>28 06 07 0E 6D 03 37 03 88</p>
        </div>
        <div>
          <p>{'>'} READOUT_BUFFER</p>
          <p>{'>'} VITAL_SIGN: 0110_R</p>
          <p>{'>'} STABILITY: 96%</p>
          <p>{'>'} HEART_RATE: 72 bpm</p>
        </div>
      </div>

      {/* Foreground AI Interface Overlay */}
      <div className="relative flex flex-col w-full max-w-2xl py-24 mx-auto min-h-screen px-4 z-20">
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
